import React, { useRef, useLayoutEffect, useState } from "react";
import "./Login_signup.css";
export default function Signup(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  const ref = useRef(null);
  useLayoutEffect(() => {
    ref.current.style.setProperty("display", "none", "important");
  }, []);
  function closeWindow() {
    document.getElementById("bgPage").style.overflow = "scroll";
    document.getElementById("signup").style.display = "none";
    ref.current.style.setProperty("display", "none", "important");
    // document.getElementById("login").ref = ref;
  }
  function signupBtnClick() {
    setErrorMessage(null);
    let users = localStorage.getItem("users");
    let usersObj = [];
    let username = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("signupPassword").value;
    console.log(password.length);
    let confirm_password = document.getElementById("confirm_password").value;
    let role = document.getElementById("role").value;
    // console.log(username, email, password, confirm_password);
    if (password != confirm_password) setErrorMessage("Confirm Password Again");
    if (password.length <= 6)
      setErrorMessage("Password should contain atleast 6 characters");
    if (users) usersObj = JSON.parse(users);
    usersObj.forEach((element) => {
      if (element.username == username || element.email == email)
        setErrorMessage("A user with same username or email ID already exists");
    });
    let regex1 = /^[a-zA-z]([0-9a-zA-Z]){1,20}$/;
    let regex2 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
    if (!regex2.test(email)) setErrorMessage("Please enter a valid email");
    else if (!regex1.test(username))
      setErrorMessage(
        "Please enter a username 2-20 characters long not starting with a number and having no special characters"
      );
    // console.log(errorMessage);
    if (errorMessage === null) {
      document.getElementById("signupError").style.display = "none";
      let newUser = {
        email: email,
        username: username,
        password: password,
        role: role,
      };
      usersObj.push(newUser);
      localStorage.setItem("users", JSON.stringify(usersObj));
      closeWindow();
      props.showAlert("You have been successfully registered", "success");
    } else document.getElementById("signupError").style.display = "block";
  }
  return (
    <div
      id="signup"
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
          <form action="" id="signupForm">
            <h1>SignUp</h1>
            <div id="signupError" style={{ color: "red", display: "none" }}>
              <p>{errorMessage}</p>
            </div>
            <div className="input-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope icon"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <input
                className="input-field"
                type="email"
                id="email"
                placeholder="Email"
              />
              <br></br>
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
                className="input-field"
                type="text"
                id="userName"
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
                className="input-field"
                type="password"
                id="signupPassword"
                placeholder="Password"
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
                className="input-field"
                type="password"
                id="confirm_password"
                placeholder="Confirm Password"
              />
              <div className="form-floating" style={{ marginTop: "15px" }}>
                <select className="form-select" id="role">
                  <option value="super_admin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="reader">Reader</option>
                </select>
                <label htmlFor="role">Select a role</label>
              </div>
            </div>
            <div style={{ marginLeft: "107px" }}>
              <input
                type="button"
                id="signupBtn"
                value="Sign Up"
                onClick={signupBtnClick}
              />
            </div>
          </form>
        </section>
      </div>
      {/* <div
        className="container"
        style={{ backgroundColor: "white", width: "60%", minWidth: "360px",height:'80%'}}
      >
        <div className="mb-3">
          <label htmlhtmlFor="exampleFormControlInput1" className="form-label">
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
          <label htmlhtmlFor="exampleFormControlTextarea1" className="form-label">
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
