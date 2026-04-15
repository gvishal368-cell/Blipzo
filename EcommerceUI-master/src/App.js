import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={AboutPage} />
        <Route  path="/services" component={ServicePage} />
        <Route  path="/contact" component={ContactPage} />
        <Route  component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
