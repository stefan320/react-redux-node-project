import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.styles.module.css";

const Navigation = () => (
  <nav className={classes.Navigation}>
    <ul>
      <li>
        <NavigationItem exact linkTo={"/"}>
          Countries
        </NavigationItem>
      </li>
      <li>
        <NavigationItem linkTo={"/Game"}>Game</NavigationItem>
      </li>
      <li>
        <NavigationItem linkTo={"/Sign-In"}>Sign In</NavigationItem>
      </li>
    </ul>
  </nav>
);

export default Navigation;
