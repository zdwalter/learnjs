fs = require 'fs'
express = require 'express'
zlib = require 'zlib'
crypto = require 'crypto'
exec = require('child_process').exec

formaline = require 'formaline'
winston = require 'winston'
optimist = require 'optimist'
argv = optimist.argv

db = require 'db'

app = module.exports = express.createServer()
app.config = require './config'

app.configure ->
    app.set 'views', __dirname + '/../views'
    app.set 'view engine', 'jade'
    app.set 'view options', { layout: true }
    app.use express.methodOverride()
    app.use app.router
    app.use express.static(__dirname + '/../public/')

app.configure 'development', ->
    app.use express.errorHandler
        dumpExceptions: true
        showStack: true

app.configure 'production', ->
  app.use express.errorHandler()

# Helpers
app.logger = new winston.Logger({ transports: [ new (winston.transports.Console)({level: app.config.level, colorize: true})  ] })
app.meta =
    pid: process.pid

app.apiResponse = (res, result) ->
    res.statusCode = 200
    #TODO: use gzip
    res.setHeader 'Content-Type', 'application/json; charset=utf-8'
    res.write JSON.stringify(result) if result
    res.end()
# Helpers end

app.foreach = (list, process, callback) ->
    self = this
    return callback() if list.length is 0
    process list.shift(), () -> self.foreach list, process, callback

app.require = (dict, fields) ->
    for f in fields
        return false if not dict.hasOwnProperty(f)
    return true
# Models

# Models end

# ROUTES
routes = {}

routes.postForm = (req, res, next) ->
    config =
        requestTimeOut : 5000
        removeIncompleteFiles: true
        listeners:
            error: (json) ->
                app.logger.error(json)
            loadend: (json, res, callback) ->
                console.log json
                req.json = json
                return callback()
    form = new formaline(config)
    form.parse(req, res, next)

##end

examples_folder = "#{__dirname}/../public/javascripts/examples"
examples = {}
exec "ls #{examples_folder}/*.js", (err, stdout, stderr) ->
    files = stdout.split('\n')
    for file in files
        try
            name = file.match('([^/]*)\.js$')[1]
            href = "/javascripts/examples/#{name}.js"
            examples[name]=href
        catch e
            continue

routes.index = (req, res) ->
    res.render 'index', { title: 'learnJS', examples: examples }

routes.error = (err, res, client) ->
    return app.apiResponse(res, {error: JSON.stringify(err)}, client)

routes.callback = (req, res) ->
    res.end()

routes.config = (req, res) ->
    config =
        send: app.config.send
    return app.apiResponse res, config

debug_template = fs.readFileSync(__dirname+'/../public/javascripts/debug.js').toString()
debug_cmd = "#{__dirname}/../bin/d8 --expose-debug-as debug "

routes.debugger = (req, res) ->
    user_script = null
    for field in req.json.fields
        app.logger.debug(JSON.stringify(field))
        if field.name isnt 'user_script'
            continue
        user_script = field.value[0]
    if user_script
        app.logger.debug(user_script)
        user_script += '\n' if user_script.slice(-1) isnt '\n'
        md5sum = crypto.createHash('md5')
        md5sum.update(user_script)
        md5 = md5sum.digest('hex')
        
        debug_script = debug_template.replace('//INSERT_CODE',user_script.replace(/\n/g,' //USER_SCRIPT\n'))
        debug_file = "/tmp/debug.#{md5}.js"
        fs.writeFile debug_file, debug_script, (err) ->
            app.logger.error(err) if err
            return res.end() if err
            cmd = debug_cmd+debug_file
            app.logger.debug(cmd)
            exec cmd, (err, stdout, stderr) ->
                if err
                    app.logger.error(stdout)
                    exception = [{"event":"uncaught_exception","exception_msg":stdout.replace(debug_file, 'input JS').replace(/\/\/USER_SCRIPT/g,'')}]
                    return res.end(JSON.stringify(exception))
                app.logger.debug(stdout)
                output = stdout.split('\n')
                last = output.pop()
                output.push(last) if last
                result = []
                for o in output
                    result.push(JSON.parse(o))
                object =
                    time: new Date().getTime()
                    input: user_script
                db.mongodb.insert 'user_script', object, () ->
                    return res.end(JSON.stringify(result))
# Routes

#cross_domain = (req, res, next) ->
#    res.header("Access-Control-Allow-Origin", "*")
#    res.header("Access-Control-Allow-Headers", "X-Requested-With")
#    next()

# app.all '/*', cross_domain

app.post '/*', routes.postForm

app.get '/', routes.index

app.post '/jdb', routes.debugger


if not module.parent
    port = argv.port ? 3000
    app.listen port
    console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env
