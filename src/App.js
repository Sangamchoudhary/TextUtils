import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //Handle dark mode operation
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f1f1f";
      showAlert("Dark mode has been enbled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enbled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
