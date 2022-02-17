import logo from "./logo.svg";
import "./App.css";
import RegistryCatalog from "./components/registryCatalog";
import Header from "./components/header";
import NavBar from "./components/navBar";
import kid from "./assests/kid.jpg";
import { Button } from "@mui/material";
import { useState } from "react";
import { typography } from "@mui/system";

function App() {
  const [loggedIn, setlogin] = useState(false);
  function login(event) {
    setlogin(true);
  }
  document.body.style.overflow = "hidden";
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#ECECEC" }}
    >
      {!loggedIn ? (
        <div
          style={{
            height: "50px",
            width: "100%",
            backgroundColor: "white",
            boxShadow: "1px 9px 15px 1px rgba(147,147,147,0.48)",
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <Button
            style={{
              backgroundColor: "#7131A1",
              fontSize: "15px",
              fontFamily: "Assistant",
              fontWeight: "bold",
              borderRadius: "20px",
              color: "white",
              width: "10%",
              margin: "5px",
            }}
            onClick={login}
          >
            כניסה
          </Button>
        </div>
      ) : null}
      {!loggedIn ? (
        <img style={{ height: "100vh", width: "100vw" }} src={kid} />
      ) : null}
      <Header />
      <div style={{ display: "flex", width: "100%" }}>
        <RegistryCatalog />
        <NavBar />
      </div>

      <div style={{ backgroundColor: "white", width: "40px" }}></div>
    </div>
  );
}

export default App;
