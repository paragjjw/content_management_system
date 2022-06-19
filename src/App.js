import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Add_content from "./components/Add_content";
import Manage_content from "./components/Manage_content";
import Alert from "./components/Alert";

function App() {
  const [alert, setalert] = useState(null);
  const [user, newUser] = useState(null);
  function setUser(username, role) {
    if (role)
      newUser({
        username: username,
        role: role,
      });
    else newUser(null);
  }
  function showAlert(message, type) {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  return (
    <Router>
      <Navbar setUser={setUser} />
      <Alert alert={alert} />
      <Login setUser={setUser} />
      <Signup showAlert={showAlert} />
      <div
        style={{
          height: "100vh",
          width: "100%",
          overflow: "scroll",
          marginTop: "75px",
          // display: "flex",
          // flexWrap: "wrap",
          // justifyContent: "center",
        }}
        id="bgPage"
      >
        <Routes>
          <Route path="/" element={<Home user={user} />}></Route>
          <Route
            path="/addContent"
            element={<Add_content showAlert={showAlert} />}
          ></Route>
          <Route path="/manageContent" element={<Manage_content />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
