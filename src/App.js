import React from "react";
import "./App.css";
import Countries from "./Containers/Countries/Countries";
import Navigation from "./components/Navigation/Navigation";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Auth from "./Containers/Auth/Auth";
import Game from "./Containers/Game/Game";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Countries} />
          <Route exact path="/register" component={Auth} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </main>
    </div>
  );
};

App.propTypes = {
  test: propTypes.string,
};

const mapStateToProps = (state) => ({
  test: state.countries.test,
});

export default connect(mapStateToProps)(App);
