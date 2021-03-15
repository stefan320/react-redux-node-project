import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.styles.module.css";
import PropTypes from "prop-types";

const NavigationItem = (props) => {
  return (
    <NavLink
      exact={props.exact}
      activeClassName={classes.active}
      className={classes.Navigation__Link}
      to={props.linkTo}
    >
      {props.children}
    </NavLink>
  );
};

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string,
  exact: PropTypes.bool,
};

export default NavigationItem;
