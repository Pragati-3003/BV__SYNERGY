import React from "react";
import "./register.css";
import axios from "axios";
import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
function Registerr() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const isAdmin = useRef();
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        isAdmin: isAdmin.current.checked,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BV SYNERGY</h3>
          <span className="loginDesc">
            Connect with friends, mentors , teachers and the world around you on
            BV SYNERGY.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
             <label htmlFor="isAdmin" className="isAdminLabel">
              Register as Admin:
              <input
                id="isAdmin"
                type="checkbox"
                ref={isAdmin}
                className="isAdminCheckbox"
                onChange={(e) => (isAdmin.current.checked = e.target.checked)}
              />
            </label>
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton"><Link to="/login" style={{textDecoration:'none' , color:'black'}}>Log into Account</Link> </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registerr;
