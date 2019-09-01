
import React, {Component} from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
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
  render() {
    const {persons} = this.state;
    return <div>
      {
        this.getUsers(persons)
      }
    </div>
  }
}

export default App;
