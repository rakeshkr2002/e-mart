import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  axios, { } from "axios"

const Signup = () => {

  let nav = useNavigate()
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { firstName, lastName, username, email, mobile, password, confirmPassword, gender } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let {data} = axios.post("http://localhost:8010/user",state)
        nav("/login")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <h2>Sign up</h2>
      <form action="/register" method="post"  onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleChange} required placeholder="Enter First Name" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleChange} required placeholder="Enter Last Name" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={handleChange} required placeholder="Enter Username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} required placeholder="Enter Email" />

        <label htmlFor="mobile">Mobile</label>
        <input type="tel" id="mobile" name="mobile" value={mobile} onChange={handleChange} required placeholder="Enter Mobile Number" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handleChange} required placeholder="Enter Password" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required placeholder="Confirm Password" />

        <div id="gender-radio">
          <label>Gender</label>
          <input type="radio" id="male" name="gender" value="male" onChange={handleChange} required />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" onChange={handleChange} required />
          <label htmlFor="female">Female</label>
          <input type="radio" id="other" name="gender" value="other" onChange={handleChange} required />
          <label htmlFor="other">Other</label>
        </div>

      <button type="submit">Sign Up</button>
        
      </form>
      <div id="login-link">
        <p>Already have an account?</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;