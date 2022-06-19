import React, { useRef, useLayoutEffect } from "react";
import "./Login_signup.css";
export default function Login(props) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    ref.current.style.setProperty("display", "none", "important");
  }, []);
  function closeWindow() {
    document.getElementById("bgPage").style.overflow = "scroll";
    document.getElementById("login").style.display = "none";
    ref.current.style.setProperty("display", "none", "important");
    // document.getElementById("login").ref = ref;
  }
  function loginBtnClick() {
    let users = localStorage.getItem("users");
    let userObj = [];
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role;
    if (users) userObj = JSON.parse(users);
    let userExists = false;
    userObj.forEach((element) => {
      if (element.username === username && element.password === password) {
        userExists = true;
        role = element.role;
      }
    });
    if (userExists) {
      props.setUser(username, role);
      closeWindow();
      document.getElementById("navLoginBtn").innerText = "Logout";
      document.getElementById("navSignupBtn").style.display = "none";
      if (role != "reader")
        document.getElementById("addContent").style.display = "block";
      if (role == "super_admin") {
        // console.log(role);
        document.getElementById("manageContent").style.display = "block";
      }
    } else document.getElementById("error").style.display = "block";
  }
  function registerBtnClick() {
    closeWindow();
    document.getElementById("signupForm").reset();
    document.getElementById("bgPage").style.overflow = "hidden";
    document.getElementById("signup").style.display = "block";
  }
  return (
    <div
      id="login"
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "126%",
        width: "100%",
        backgroundColor: "rgba(9, 0, 0, 0.68)",
        position: "absolute",
        top: "-23px",
        display: "none",
        zIndex: "1",
      }}
      ref={ref}
    >
      <div className="container">
        <section id="content">
          <button
            onClick={closeWindow}
            type="button"
            className="close"
            aria-label="Close"
            style={{
              right: "0px",
              position: "absolute",
              top: "0px",
              backgroundColor: "#f9f9f9",
              border: "none",
              fontSize: "20px",
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <form action="" id="loginForm">
            <h1>Login</h1>
            <div id="error" style={{ color: "red", display: "none" }}>
              <p>Invalid usename or password</p>
            </div>
            <div className="input-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              <input
                id="username"
                className="input-field"
                type="text"
                placeholder="Username"
              />
              <br></br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-shield icon"
                viewBox="0 0 16 16"
              >
                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
              </svg>
              <input
                id="password"
                className="input-field"
                type="password"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                type="button"
                id="loginBtn"
                value="Log in"
                onClick={loginBtnClick}
              />
              <a href="#">Lost your password?</a>
              <a href="#" onClick={registerBtnClick}>
                Register
              </a>
            </div>
          </form>
        </section>
      </div>
      {/* <div
        className="container"
        style={{ backgroundColor: "white", width: "60%", minWidth: "360px",height:'80%'}}
      >
        <div className="mb-3">
          <label htmlhtmlhtmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlhtmlhtmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div> */}
    </div>
  );
}
