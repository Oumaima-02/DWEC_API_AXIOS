import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function CreateUser() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    setName(event.target.name.value);
    setNickname(event.target.nickname.value);
    setEmail(event.target.email.value);
    const formData = {
      name: event.target.name.value,
      nickname: event.target.nickname.value,
      email: event.target.email.value
    };
    const response = await axios.post(
      "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData",
      formData
    );
  };
  const navigate = useNavigate();

  const SeeUsersList = () => {
    navigate("/UserList");
  };
  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input id="name" name="name" />
          <br />
          <label>NickName:</label>
          <input name="nickname" />
          <br />
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" />
          <br />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <button onClick={SeeUsersList}>See List Users</button>
    </div>
  );
}
export default CreateUser;
