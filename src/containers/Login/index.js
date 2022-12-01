import React, { useEffect, useState } from "react";
import "./style.css";

const Login = () => {
  const [userDetail, setUserDetail] = useState({ name: "", psw: "" });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  console.log("Hey", userDetail);
  const attachEventListner = () => {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", () => {
      console.log("Hello", count++);
    });
  };
  useEffect(() => {
    attachEventListner();
  }, []);
  return (
    <div>
      <h2>Login Form</h2>

      <form>
        <div className="imgcontainer">
          {/* <img src="img_avatar2.png" alt="Avatar" class="avatar" /> */}
        </div>

        <div className="container">
          <label for="name">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            onChange={handleOnChange}
            value={userDetail.name}
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={handleOnChange}
            value={userDetail.psw}
            required
          />

          <button type="submit" className="loginBtn" id="clickMe">
            Login
          </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default Login;
