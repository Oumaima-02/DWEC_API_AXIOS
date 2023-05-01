import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      });
  }
  sendId(id) {}

  render() {
    return (
      <div>
        <Link to="/">
          <button>Go Back</button>
        </Link>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              Id: {user.id}, Name: {user.name} , Nickname: {user.nickname},
              Email:
              {user.email}
              <Link to={`/UserDetails/${user.id}`}>
                <button>Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
