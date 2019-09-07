
import React, {Component} from 'react';
import {Modal, Form, Input, InputNumber, Icon, Select} from 'antd';

const Option = Select.Option;
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 }
};
class AddUserModal extends Component {
    handleOk = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return;
            this.props.handleOk(values);
        });
      };
    handleCancel = () => {
        this.props.form.resetFields();
        this.props.handleCancel();
    }  
    render() {
        let {visible} = this.props;
        let {getFieldDecorator} = this.props.form;
        return(
            <Modal
                title='添加用户'
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form {...layout}>
                    <Form.Item label="姓名">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="年龄">
                        {getFieldDecorator('age', {
                            rules: [{ required: true, message: 'Please input your age' }],
                        })(
                            <InputNumber />
                        )}
                    </Form.Item>
                    <Form.Item label="性别">
                        {getFieldDecorator('sex', {
                            rules: [{ required: true, message: 'Please input your sex' }],
                        })(
                            <Select>
                                <Option value="male">男</Option>
                                <Option value="female">女</Option>
                            </Select>
                        )}
                    </Form.Item>
                </Form>

            </Modal>
        )
    }
}

export default Form.create({ name: 'addUser' })(AddUserModal);