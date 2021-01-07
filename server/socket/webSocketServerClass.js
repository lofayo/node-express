const ws = require('ws');
const fs = require('fs');
const socketObj = require('./socketObj.js');
let SocketServer = ws.Server
class WebSocketServerClass {
    constructor(name, port) {
        this.socket = null;
        this.wsServer = null;
        this.store(name, port);
        this.create(name, port);
    }
    // 在对应端口上生成websocket服务
    create(name, port) {
        this.wsServer = new SocketServer({port});
        this.wsServer.on('connection',(socket) => {
            this.socket = socket;
            //监听对方发过来的消息数据
            socket.on('message', (data) => {
                // data是客户端发送过来的参数
                this.socket.send('the data is from web request: ' + data);
            });
        })
    }
    // socket服务向客户端发送数据
    send(data) {
        if(this.socket) {
            this.socket.send(data);
        }
    }
    // 存储socket服务对象到文件。其中socketObj.js是所有socket服务对象，socketObj.json是具体的文件对象，以供查阅
    store(name, port) {
        if(!name || !port) return;
        name = name + 'Socket';
        if(!socketObj[name]) {
            socketObj[name] = {socketServer: this,port}
            this.writeSocketObj(socketObj);
        }
    }
    // 将socket对象数据写入到socketObj.js文件
    writeSocketObj(socketObj) {
        const comment = `
/*
* @Author: 罗方勇
* @Description: 存储websocket服务的对象文件
* @Date: 2020-09-24 17:32:46
 * @LastEditTime: 2020-09-25 16:01:18
 */
        `;
        const obj = JSON.stringify(socketObj, '', '\t');
        const names = JSON.stringify(Object.keys(socketObj));
        const objContent = `
// 存储的socket对象，socket对象名：${names};
const socketObj = ${obj};
        `;
        const end = 
`
module.exports = socketObj;
`;
        const text = comment + objContent + end;
        fs.writeFile('./socketObj.js', text, {encoding: 'utf-8'}, (err, data) => {
        });
    }
}

module.exports = WebSocketServerClass;