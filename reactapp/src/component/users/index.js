
import React, {Component, Fragment} from 'react';
import {Button} from 'antd';
import AddUserModal from './addUserModal';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      visible: false
    };
  }
  componentDidMount() {
    let url = 'http://localhost:3000/users/getUsers';
    fetch(url)
    .then((res) => res.json())
    .then((result) => {
      const {data, success} = result || {};
      if (success) {
        this.setState({persons: data});
      }
    })
  }
  getUsers(persons) {
    return persons.map((person) => {
      const {name, age, sex} = person || {};
      return <p><em>姓名：{name}</em>, 年龄：{age}, 性别：{sex}</p>
    })
  }
  addUser = () => {
      this.setState({visible: true});
  }
  handleOk = (userValues) => {
      let url = 'http://localhost:3000/users/addUsers';
      fetch(url, {
          body: JSON.stringify(userValues),
          method: 'post'
      })
      .then(res => res.json())
      .then((result) => {
        debugger;
      })

  }
  handleCancel = () => {
      this.setState({visible: false})
  }
  render() {
    const {persons, visible} = this.state;
    return <div>
        <div><Button onClick={this.addUser} type='primary'>添加用户</Button></div>  
        <AddUserModal visible={visible} handleOk={this.handleOk} handleCancel={this.handleCancel} />
        {
            this.getUsers(persons)
        }
    </div>
  }
}

export default User;
