assert = require 'assert'
fs = require 'fs'
http = require 'http'
verbose = if process.env.verbose? then true else false


config = {}
config.options = () ->
    host: 'localhost'
    port: 3001

http_post = (url, data, callback) ->
    data = JSON.stringify(data) if typeof data isnt 'string'
    options = config.options()
    options.method = 'post'
    options.path = url
    response = ''
    options.headers =
        'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Length': data.length
    req = http.request options, (res) ->
        res.on 'data', (chunk) -> response += chunk
        res.on 'end', () ->
            console.log response if verbose
            callback null, response
    req.on 'error', (e) -> callback e
    console.log data
    req.write data
    req.end()

http_get = (url, callback) ->
    options = config.options()
    options.path = url
    data = ''
    #console.log url
    req = http.get options, (res) ->
        res.on 'data', (chunk) -> data += chunk
        res.on 'end', () ->
            #console.log data
            callback null, data
    req.on 'error', (e) -> callback e


exports.index = ->
    http_get '/', (e, res) ->
        console.log res,e  if e
        assert.includes res, 'learnJS', res
            

