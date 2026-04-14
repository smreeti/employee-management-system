const http = require('http')
const EventEmitter = require('events')

const server = http.createServer((req, res) => {
    res.write('Hello world!');
    res.end();
})

server.listen(5000);

////////////////////////////////////////////////////////////////////

const customEmitter = new EventEmitter();
customEmitter.on('response', () => {
    console.log(`data received`);
})

customEmitter.emit('response');