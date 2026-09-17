const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const port = 23115;

const app = express();
const server = createServer(app);
const io = new Server(server);

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'js', 'css'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders (res, path, stat) {
    res.set('x-timestamp', Date.now())
    if (path.endsWith(".js")) {
      res.set("Content-Type", "application/javascript");
    }
    if (path.endsWith(".css")){
      res.set("Content-Type", "text/css");
    }
  }
}


app.use(express.static(join(__dirname, "js"), options));
app.use(express.static(join(__dirname, "css"), options));
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  handleJoin(socket,io);
});

server.listen(port, () => {
  console.log('server running at http://localhost:'+port);
});


function handleJoin(socket, io){
  //do the join stuff here
}