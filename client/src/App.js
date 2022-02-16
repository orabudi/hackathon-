import logo from './logo.svg';
import './App.css';
import RegistryCatalog from "./components/registryCatalog";
import Header from "./components/header";
import NavBar from "./components/navBar";
function App() {
  return (
    <div className="App">
          <Header/>
          <RegistryCatalog />
          <NavBar/>
    </div>
  );
}

export default App;
