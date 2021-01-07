const express = require('express');
const fs = require('fs');
const WebSocketServer = require('./webSocketServerClass.js');
const socketObj = require('./socketObj.js');

const clearFile = () => {
    fs.writeFile('./socketObj.js','', (err) => {
    })
}
clearFile();
const app = express();
app.use(express.static(__dirname))
//http服务器
app.listen(4000);
const wsServer1 = new WebSocketServer('randomNumber', 9999);
const wsServer2 = new WebSocketServer('date', 8888);
setInterval(() => {
    wsServer1.send('port 9999 randomNumber :' + Math.random());
    wsServer2.send('port 8888 data :' + new Date().getTime());
}, 2000);

// setTimeout(() => {
//     setInterval(() => {
//         // 后端有对应数据更新时，实时更新数据到前端
//         const {socketServer} = socketObj['dateSocket'] || {};
//         const {socket: dateSocket} = socketServer || {};

//         if(dateSocket) {
//             dateSocket.send('hello');
//         }
//     }, 2000);
// }, 1000);