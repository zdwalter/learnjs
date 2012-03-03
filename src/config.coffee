module.exports =
    app: 'learnjs.info'
    level: 'debug'
    redis:
        host: 'production.redis'
        port: 6379
        connection_pool: true
        connection_pool_size: 16
    mongodb:
        host: 'production.mongodb'
        port: 27017
        connection_pool: true
        connection_pool_size: 16
        db: 'learnjs'

