import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  NavBar,
  Footer,
  Home,
  About,
  Portfolio,
  Contact,
  Toggle,
} from "./Components";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeContext } from "./Context";
import { Helmet } from "react-helmet";

const App = () => {
  const Theme = useContext(ThemeContext);
  const darkMode = Theme.state.darkMode;
  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
        }}
      >
        <NavBar />
        <Helmet>
          <title> React Portfolio</title>
          {/* <!-- SEO --> */}
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="React portfolio" content="Portfolio content" />
          <base href="https://tahareactportfolio.web.app/" />
          <meta property="og:title" content="React Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://github.com/taha123618" />
          {/* <!-- SEO End  --> */}
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Toggle />
        <Footer />
      </div>
    </>
  );
};

export default App;
