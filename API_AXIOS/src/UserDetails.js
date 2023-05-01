import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <Link to="/UserList">
        <button>Go Back</button>
      </Link>
      <h1>User Details</h1>
      <ul>
        <li>Id: {id}</li>
        <li>name: {users.name}</li>
        <li>nickname: {users.nickname}</li>
        <li>email: {users.email}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
