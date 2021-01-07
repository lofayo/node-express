
/*
* @Author: 罗方勇
* @Description: 存储websocket服务的对象文件
* @Date: 2020-09-24 17:32:46
 * @LastEditTime: 2020-09-25 16:01:18
 */
        
// 存储的socket对象，socket对象名：["randomNumberSocket","dateSocket"];
const socketObj = {
	"randomNumberSocket": {
		"socketServer": {
			"socket": null,
			"wsServer": {
				"_events": {},
				"_eventsCount": 1,
				"_server": {
					"_events": {},
					"_eventsCount": 5,
					"_connections": 0,
					"_handle": {
						"reading": false
					},
					"_usingWorkers": false,
					"_workers": [],
					"_unref": false,
					"allowHalfOpen": true,
					"pauseOnConnect": false,
					"httpAllowHalfOpen": false,
					"timeout": 0,
					"keepAliveTimeout": 5000,
					"maxHeadersCount": null,
					"headersTimeout": 60000,
					"requestTimeout": 0,
					"_connectionKey": "6::::9999"
				},
				"clients": {},
				"options": {
					"maxPayload": 104857600,
					"perMessageDeflate": false,
					"handleProtocols": null,
					"clientTracking": true,
					"verifyClient": null,
					"noServer": false,
					"backlog": null,
					"server": null,
					"host": null,
					"path": null,
					"port": 9999
				}
			}
		},
		"port": 9999
	},
	"dateSocket": {
		"socketServer": {
			"socket": null,
			"wsServer": null
		},
		"port": 8888
	}
};
        
module.exports = socketObj;
