const http = require("http")
let geometryDashAPI = require("./gd.js")
let gd = geometryDashAPI.gd


const version = "0.1"

const server = http.createServer((req, res) => {
    if (req.url.startsWith("/get/"))
    {
        let id = req.url.replace("/get/", "")
        gd.getLevelRequest(id)
        .send()
        .then(output => {
            serverEndRequest(res, JSON.stringify(output))
        })
    }
    else switch(req.url)
    {
        case "/":
            serverEndRequest(res, `<html><head></head><body style="font-size: 20px; font-family: 'Comic Sans MS'">hey why are you here??</body></html>`)
            break
        default:
            serverEndRequest(res, `404 :(`)
    }
})

function run()
{
    server.listen(5000, "127.0.0.1", () => {
        console.log(`Server is listening at 127.0.0.1:5000`)
    })
}

function serverEndRequest(res, data="")
{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.write(data)
    res.end()
}

module.exports = { run }
