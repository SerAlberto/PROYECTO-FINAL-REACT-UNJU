import "./App.css";
import { Switch, Route } from "react-router-dom";
import Contacto from "./components/contacto/Contacto";
import Home from "./components/home/Home";
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";
import Footer from "./components/home/Footer";

export default function App() {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contacto} />
            <Route>
              <h1 className="m-5">Error 404 - No se encontró la página</h1>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}
