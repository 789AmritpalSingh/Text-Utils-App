import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => { // alert will remain on the screen for 2 seconds
      setAlert(null);
    }, 2000);
  };

  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  // }

  const toggleDarkMode = () => {
 //   removeBodyClasses() // removing background color classes once selected
    //document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };


  // const toggleBlueMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "blue";
  //     showAlert("Blue Screen Mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // };

  // const toggleRedMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "red";
  //     showAlert("Red Screen Mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light Mode has been enabled", "success");
  //   }
  // };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleDarkMode={toggleDarkMode}
          // toggleBlueMode={toggleBlueMode}
          // toggleRedMode={toggleRedMode}
        />
        <div className="container my-3">
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/about" element={<About mode={mode} />}></Route>
              <Route
                path="/"
                element={
                  <TextForm
                    heading="Enter text to analyze"
                    mode={mode}
                    showAlert={showAlert}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
