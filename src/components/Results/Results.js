import React from "react";
import PropTypes from "prop-types";
import * as classes from "./Results.style.module.css";

// Map through all countries and display the result
const Results = (props) => (
  <div className={classes.Results}>
    <div className={classes.ResultsItems}>
      {props.countries.map((result) => (
        <p className={classes.ResultsItem} key={result.name}>
          {result.name}
        </p>
      ))}
    </div>
  </div>
);

Results.propTypes = {
  countries: PropTypes.array,
};

export default Results;
