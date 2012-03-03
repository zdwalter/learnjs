http = require 'http'
optimist = require 'optimist'
argv = optimist.argv

token = argv.token
data =
    event: 'test-send'
    properties:
        token: token
        action: 'test-action'
        label: 'test-label'
        distinct_id: 'test-client'

config = {}
config.options = () ->
    host: 'localhost'
    port: 80

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

data_str = new Buffer(JSON.stringify(data)).toString('base64')
http_get "/track?data=#{data_str}", (e, res) ->
    console.log res
