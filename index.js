// import json-server library
const jsonserver = require('json-server')

// craete a server for running for json data
const todoServer = jsonserver.create()

// set up route/path for db.json file
const router = jsonserver.router('db.json')

// returns middlewares used by json server
const middlewares = jsonserver.defaults()

// set up port number for running json server
const port = 4000 || process.env.port

// use middlewaares and router to your server
todoServer.use(middlewares)
todoServer.use(router)

// to listen server app to resolve request
todoServer.listen(port, () => {
    console.log(`todo server started at port :${port} and waiting for request`);
})