import React, { Component, Fragment } from "react";
import { Button } from "antd";
import AddUserModal from "./addUserModal";
import request from "../../utils/request";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            visible: false
        };
    }
    componentDidMount() {
        this.getUsers();
    }
    getUsers = () => {
        let url = "/users/getUsers";
        request.get(url, (result) => {
            const { data, success } = result || {};
            if (success) {
                this.setState({ persons: data });
            }
        });
    };
    renderUser = (person) => {
        const { name, age, sex } = person || {};
        return (
            <p>
                <em>姓名：{name}</em>, 年龄：{age}, 性别：{sex}
            </p>
        );
    };
    addUser = () => {
        this.setState({ visible: true });
    };
    saveUser = (userValues) => {
        let url = "/users/addUsers";
        request.post(url, userValues, (result) => {
            const { success, data } = result || {};
            if (success) {
                this.handleCancel();
                this.getUsers();
            }
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    render() {
        const { persons, visible } = this.state;
        return (
            <div>
                <div>
                    <Button onClick={this.addUser} type="primary">
                        添加用户
                    </Button>
                </div>
                <AddUserModal
                    visible={visible}
                    handleOk={this.saveUser}
                    handleCancel={this.handleCancel}
                />
                {persons && persons.length
                    ? persons.map(this.renderUser)
                    : null}
            </div>
        );
    }
}

export default User;
