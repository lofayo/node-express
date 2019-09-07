import {message} from 'antd';

const handleResult = (result, callback) => {
    const {message:messageInfo, success} = result || {};
    if (!success) message.error(messageInfo);
    message.success(messageInfo);
    callback(result);
}

const request = {
    get(url, callback) {
        fetch(`http://localhost:3000${url}`)
            .then(res => res.json())
            .then((result) => handleResult(result, callback))
    },
    post(url, params, callback) {
        fetch(`http://localhost:3000${url}`, {
            body: JSON.stringify(params),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((result) => handleResult(result, callback))
    }
}

export default request;