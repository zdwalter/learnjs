app = require 'app'
assert = require 'assert'

exports.index = ->
    assert.response app,
        { url: '/' }
        { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' }}
        (res) ->
            assert.includes res.body, 'learnJS'
            
