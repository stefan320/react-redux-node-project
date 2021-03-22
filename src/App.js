import React from "react";
import "./App.css";
import Countries from "./Containers/Countries";
import Navigation from "./components/Navigation/Navigation";
import { connect } from "react-redux";
import propTypes from "prop-types";

const App = () => {
  return (
    // axios
    //   .post("http://localhost:5000/api", ["Malta"])
    //   .then((response) => {
    //     this.setState({ data: response.data.name });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    <div className="App">
      <Navigation />
      <main className="main">
        <Countries />
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
