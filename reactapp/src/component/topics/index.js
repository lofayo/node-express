import React, { Component } from 'react';
import { Tabs, Form, Button, Input, Tag } from 'antd';
import request from '../../utils/request';

const { TabPane } = Tabs;
class AddTopic extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return;
            request.post('/topic/addTopic', values, (result) => {
                const { data, success } = result || {};
                if (success) {
                    this.props.addTopic(data);
                    this.props.form.resetFields();
                }
            });
        });
    };
    render() {
        let { getFieldDecorator } = this.props.form;
        return (
            <Form layout='inline' onSubmit={this.handleSubmit}>
                <Form.Item label='主题名称'>
                    {getFieldDecorator('topicName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your topicName!'
                            }
                        ]
                    })(<Input placeholder='topicName' />)}
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        新增
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const WrapAddTopic = Form.create()(AddTopic);
class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        };
    }
    componentDidMount() {
        this.getTopics();
    }
    getTopics = () => {
        request.get('/topic/getTopics', (result) => {
            const { success, data } = result || {};
            if (!success) return;
            this.setState({ topics: data });
        });
    };
    addTopic = (data) => {
        let { topics } = this.state;
        topics.push(data);
        this.setState({ topics });
    };
    renderTopics = (topics) => {
        return topics.map((topic) => {
            const { topicName } = topic || {};
            return <Tag color='lime'>{topicName}</Tag>;
        });
    };
    render() {
        let { topics } = this.state;
        return (
            <div className='card-container'>
                <Tabs type='card'>
                    <TabPane tab='主题列表' key='1'>
                        {this.renderTopics(topics)}
                    </TabPane>
                    <TabPane tab='新增主题' key='2'>
                        <WrapAddTopic addTopic={this.addTopic} />
                    </TabPane>
                    <TabPane tab='删改主题' key='3'>
                        <p>Content of Tab Pane 2</p>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
export default Topics;
