/*
 * @Author: 罗方勇
 * @Description: 生成websocket的类
 * @Date: 2020-09-24 15:57:33
 * @LastEditTime: 2020-09-24 17:13:57
 */
/**
 * @param {url, params} 
 * @description: 
 */
class WebSocketClass {
    constructor(port, params) {
        // 存储操作函数
        this.callbackList = [];
        // 生成socket实例
        const url = 'ws://localhost:' + port;
        this.socket = new WebSocket(url);
        // 开启websocket，连接且发送参数
        this.socket.onopen = () => {
            this.socket.send(params);
        };
        // 当接收到服务端消息
        this.socket.onmessage = (event) => {
            this.callbackList.forEach(fn => {
                if(fn instanceof Function) {
                    fn(event.data);
                }
            })
        }
    }
    // websocket收到消息后需要执行的操作
    push = (callback) => {
        this.callbackList.push(callback);
    }
}

export default WebSocketClass;