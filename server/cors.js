// wrapper for cors-anywhere
var cors_proxy = require('cors-anywhere');

function start()
{
    // Listen on a specific host via the HOST environment variable
    var host = process.env.HOST || '127.0.0.1';
    // Listen on a specific port via the PORT environment variable
    var port = process.env.PORT || 8080;

    cors_proxy.createServer({
        originWhitelist: [], // Allow all origins
        //requireHeader: ['origin', 'x-requested-with'],
        removeHeaders: ['cookie', 'cookie2'],
        setHeaders: {"user-agent": ""}
    }).listen(port, host, function() {
        console.log('Running CORS Anywhere on ' + host + ':' + port);
    });
}

module.exports = { start }
