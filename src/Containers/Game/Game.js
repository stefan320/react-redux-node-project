import React from "react";
import { IconContext } from "react-icons";
import { GiBanana, GiShinyApple, GiLemon, GiCherry } from "react-icons/gi";
const Game = () => {
  const icons = {
    banana: (
      <IconContext.Provider
        value={{ color: "#ffe135", className: "icon-default" }}
      >
        <GiBanana />
      </IconContext.Provider>
    ),
    apple: (
      <IconContext.Provider
        value={{ color: "#ff0800", className: "icon-default" }}
      >
        <GiShinyApple />
      </IconContext.Provider>
    ),
    lemon: (
      <IconContext.Provider
        value={{ color: "#fff700", className: "icon-default" }}
      >
        <GiLemon />
      </IconContext.Provider>
    ),
    cherry: (
      <IconContext.Provider
        value={{ color: "#D2042D", className: "icon-default" }}
      >
        <GiCherry />
      </IconContext.Provider>
    ),
  };
  return (
    <div>
      <div>{icons.banana}</div>
      <div>{icons.apple}</div>
      <div>{icons.lemon}</div>
      <div>{icons.cherry}</div>
    </div>
  );
};

export default Game;
