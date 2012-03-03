fs = require 'fs'
express = require 'express'
zlib = require 'zlib'

formaline = require 'formaline'
winston = require 'winston'
optimist = require 'optimist'
argv = optimist.argv


app = module.exports = express.createServer()
app.config = require './config'

app.configure ->
    app.set 'views', __dirname + '/../views'
    app.set 'view engine', 'jade'
    app.set 'view options', { layout: false }
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

routes.index = (req, res) ->
    res.render 'index', { title: 'learnJS' }

routes.error = (err, res, client) ->
    return app.apiResponse(res, {error: JSON.stringify(err)}, client)

routes.callback = (req, res) ->
    res.end()

routes.config = (req, res) ->
    config =
        send: app.config.send
    return app.apiResponse res, config

routes.debugger = (req, res) ->
    return
# Routes

#cross_domain = (req, res, next) ->
#    res.header("Access-Control-Allow-Origin", "*")
#    res.header("Access-Control-Allow-Headers", "X-Requested-With")
#    next()

# app.all '/*', cross_domain

app.post '/*', routes.postForm

app.get '/', routes.index

app.get '/config', routes.config

app.post '/jdb', routes.debugger


if not module.parent
    port = argv.port ? 3000
    app.listen port
    console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env
