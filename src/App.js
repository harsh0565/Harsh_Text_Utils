import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/Textforms";
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("dark mode enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enable", "success");
    }
  };

  return (
    <>
      <Navbar tittle="Text-Utils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <TextForms
                showalert={showAlert}
                heading="Text Convertor"
                mode={Mode}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
