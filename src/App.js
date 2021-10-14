import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/contacto/Contacto";
import Home from "./components/home/Home";
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";
import NavBar from "./components/navBar/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route>
          <h1 className="m-5">Error 404 - No se encontró la página</h1>
        </Route>
      </Switch>
      <Contacto />
    </Router>
  );
}
