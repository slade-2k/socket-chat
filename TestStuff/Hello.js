/**
 * Created by iho on 24.05.2019.
 */
var http = require('http');
var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

http.createServer(function (req, res) {

    fs.readFile('./index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(req.url);
        res.write(data);
        res.end('Hi!');
    });

}).listen(8080);

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');