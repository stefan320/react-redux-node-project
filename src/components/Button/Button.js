import classes from "./Button.style.module.css";
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => (
  <div className={classes.Button} onClick={props.clicked}>
    {props.children}
  </div>
);

Button.propTypes = {
  clicked: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
