import React from "react";
import PropTypes from "prop-types";
import * as classes from "./Input.styles.module.css";

const InputWLabel = (props) => (
  <>
    <label className={classes.Label} htmlFor={props.name}>
      {props.label}
    </label>
    <input
      className={classes.Input}
      type={props.type}
      id={props.name}
      ref={props.reference}
      onChange={props.changed}
    ></input>
  </>
);

InputWLabel.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  changed: PropTypes.func,
  reference: PropTypes.func,
};

export default InputWLabel;
