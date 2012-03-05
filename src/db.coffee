redis = require 'redis'
mongodb = require 'mongodb'
winston = require 'winston'

db = () ->

module.exports = db

db.config = require './config'
db.logger = new winston.Logger({ transports: [ new (winston.transports.Console)({level: db.config.level, colorize: true})  ] })
db.close = () ->
    db.redis.close()
    db.mongodb.close()

db.redis = {}
db.redis._clientQueue = []

db.redis.createClient = ->
    if (db.redis._clientQueue.length is 0)
        client = redis.createClient(db.config.redis.port, db.config.redis.host)
        client.on 'error', (err) -> db.logger.error "redis error:#{err}"
        #db.logger.info('create redis client', db.logger.meta)
    else
        client = db.redis._clientQueue.shift()
    return client

db.redis.releaseClient = (client, err) ->
    if (db.config.redis.connection_pool and client.connected and (not err) and (db.redis._clientQueue.length < db.config.redis.connection_pool_size))
        db.redis._clientQueue.push(client)
        #db.logger.info('release redis client:length is #{db.redisClientQueue.length}', db.logger.meta)
    else
        #db.logger.info('release redis client:err:#{err}', db.logger.meta)
        client.end()

db.redis.close = ->
    while (client = db.redis._clientQueue.shift())
        client.end()

Db = mongodb.Db
Connection = mongodb.Connection
Server = mongodb.Server

db.mongodb = {}
db.mongodb._clientQueue = []

db.mongodb.createClient = ->
    if (db.mongodb._clientQueue.length is 0)
        mongodb = new Db(db.config.mongodb.db, new Server(db.config.mongodb.host, db.config.mongodb.port, {}), {})
        #db.logger.info('create mongo client', db.logger.meta);
    else
        mongodb = db.mongodb._clientQueue.shift()
    return mongodb

db.mongodb.releaseClient = (client, err) ->
    if (db.config.mongodb.connection_pool and client.state is 'connected' and (not err) and db.mongodb._clientQueue.length < db.config.mongodb.connection_pool_size)
        db.mongodb._clientQueue.push(client)
        #db.logger.info('release mongo client:length is '+db.mongodb._clientQueue.length, db.logger.meta);
    else
        db.logger.error "mongodb error:#{err}" if typeof err isnt 'undefined'
        client.close() if client.state is 'connected'

db.mongodb.close = ->
    while (client = db.mongodb._clientQueue.shift())
        client.close() if client.state is 'connected'

db.mongodb.collection = (mongodb, name, callback) ->
    self = this
    if (mongodb.state isnt 'connected')
        mongodb.open (err, mongodb) ->
            return callback(err) if err
            mongodb.collection name, callback
    else
        mongodb.collection name, callback

db.mongodb.findOne = (collection, condition, callback) ->
    mongodb = db.mongodb.createClient()
    db.mongodb.collection mongodb, collection, (err, collection) ->
        collection.findOne condition, (err, res) ->
            db.mongodb.releaseClient(mongodb)
            callback(err, res)

db.mongodb.insert = (collection, object, callback) ->
    mongodb = db.mongodb.createClient()
    db.mongodb.collection mongodb, collection, (err, collection) ->
        return callback(err) if err
        collection.insert object, {safe:true}, (err, res) ->
            db.mongodb.releaseClient(mongodb)
            callback(err, res)

db.mongodb.ensureIndex = (collection, index, condition, callback) ->
    mongodb = db.mongodb.createClient()
    db.mongodb.collection mongodb, collection, (err, collection) ->
        collection.ensureIndex index, condition, (err, res) ->
            db.mongodb.releaseClient(mongodb)
            callback(err, res)

db.mongodb.update = (collection, condition, data, callback) ->
    mongodb = db.mongodb.createClient()
    db.mongodb.collection mongodb, collection, (err, collection) ->
        console.log data
        collection.update condition, {'$set': data}, {safe: true}, (err, res) ->
            db.mongodb.releaseClient(mongodb)
            return callback(err, res)

db.mongodb.addToSet = (collection, condition, field, value, callback) ->
    mongodb = db.mongodb.createClient()
    return callback('mongodb createClient fail') if not mongodb
    db.mongodb.collection mongodb, collection, (err, collection) ->
        return callback(err) if err or not collection
        data = {}
        data[field] = value
        collection.update condition, {'$addToSet': data}, {safe: true}, (err, res) ->
            return callback(err) if err
            db.mongodb.releaseClient(mongodb)
            return callback(err, res)

