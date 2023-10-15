let cors = require("./cors.js")
let server = require("./server.js")

cors.start()
server.run()

console.log("Server started")
