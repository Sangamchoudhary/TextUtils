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
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    setMode("dark");
    showAlert(`${cls} theme applied`, "success");
  };
  const toggleDarkMode = () => {
    if (mode === "light") {
      removeBodyClasses();
      setMode("dark");
      document.body.style.backgroundColor = "#1f1f1f";
      showAlert("Dark mode has been enbled", "success");
    } else {
      removeBodyClasses();
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enbled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleDarkMode={toggleDarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
