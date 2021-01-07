/*
 * @Author: 罗方勇
 * @Description: 生成websocket的类
 * @Date: 2020-09-24 15:57:33
 * @LastEditTime: 2021-01-07 14:54:19
 */
/**
 * @param {port, params} 
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
        // 当接收到服务端消息，触发订阅函数
        this.socket.onmessage = (event) => {
            this.publish(event.data);
        }
    }
    // 订阅websocket收到消息后需要执行的操作
    subscribe = (callback) => {
        this.callbackList.push(callback);
    }
    // 给订阅函数发布数据
    publish = (data) => {
        this.callbackList.forEach(fn => {
            if(fn instanceof Function) {
                fn(data);
            }
        })
    }
}

export default WebSocketClass;