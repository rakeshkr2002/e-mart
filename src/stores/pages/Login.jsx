import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../context/CardContext";

const Login = () => {
  let nav = useNavigate();
  const { login } = useContext(cartContext); 

  const [state, setState] = useState({
    username: "", 
    password: ""
  });

  const [data, setData] = useState([]);

  const { username, password } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const fetchData = async () => {
    try {
      let { data } = await axios.get("http://localhost:8010/user");
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = data.find((user) => user.username === state.username);
      if (user) {
        if (user.password === state.password) {
          login(user);
          nav("/");
        } else {
          alert("Invalid password");
        }
      } else {
        alert("Invalid username");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>

      <div className="">
        <p className="register-link">
          Don't have an account? <Link style={{ color: "blue" }} to="/signup">Sign up</Link>
        </p>
      </div>

      <footer className="footer">
        <p>© 2025 E-mart</p>
      </footer>
    </div>
  );
};

export default Login;