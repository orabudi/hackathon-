import logo from "./logo.svg";
import "./App.css";
import RegistryCatalog from "./components/registryCatalog";
import Header from "./components/header";
import NavBar from "./components/navBar";
function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#ECECEC" }}
    >
      <Header />
      <div style={{ display: "flex", width: "100%" }}>
        <RegistryCatalog />
        <NavBar />
      </div>
    </div>
  );
}

export default App;
