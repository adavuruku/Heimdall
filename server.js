// https://heimdallproject.herokuapp.com
// https://github.com/adavuruku/Heimdall
// https://documenter.getpostman.com/view/8490713/TVssjopk

//create server object
const http = require('http');
 const app = require('./app');
const port = process.env.PORT || 3000;
//create the server
const server = http.createServer(app);
server.listen(port);