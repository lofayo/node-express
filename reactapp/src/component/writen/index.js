import React, { Component } from 'react';
import { Button, message, Select } from 'antd';
import WangEditor from 'wangeditor';
import request from '../../utils/request';
import './index.less';

const { Option } = Select;
class Writen extends Component {
    constructor(props) {
        super(props);
        this.curTopic = null;
        this.editor = null;
        this.state = {
            topics: []
        }
    }
    componentDidMount() {
        this.initEditor();
        this.getTopics();
    }
    initEditor = () => {
        const editorElement = document.getElementById('editor');
        this.editor = new WangEditor(editorElement);
        this.editor.create();
    }
    getTopics = () => {
        request.get('/topic/getTopics', (result) => {
            const { success, data } = result || {};
            if (!success) return;
            this.setState({ topics: data });
        });
    };
    saveContent = () => {
        const content = this.editor.txt.html();
        if(!content || !this.curTopic) return message.warn('文章和类型必填');
        const params = {articleType: this.curTopic, content}
        request.post('/article/addArticle', params, (res) => {

        })

    }
    changeTopic = (value) => {
        this.curTopic = value;
    }
    render() {
        let {topics} = this.state;
        return <div>
            文章类型：<Select onChange={this.changeTopic} style={{width: 200}}>
                {
                    topics.map(item => {
                        return <Option value={item.topicName}>{item.topicName}</Option>
                    })
                }    
            </Select>
            <Button onClick={this.saveContent}>保存</Button>
            <div id='editor' className={'editor'}></div>
            </div>;
    }
}
export default Writen;
