import React from "react";
import PropTypes from "prop-types";
import * as classes from "./Input.styles.module.css";

const InputWLabel = (props) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <input
      className={classes.Input}
      type={props.type}
      name={props.name}
      onChange={props.changed}
    ></input>
  </div>
);

InputWLabel.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  changed: PropTypes.func,
};

export default InputWLabel;
