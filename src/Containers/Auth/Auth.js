import React from "react";
import PropTypes from "prop-types";
import Form from "../../components/Form/Form";
import * as classes from "./Auth.styles.module.css";
import casinoImage from "../../assets/images/slot-machines.jpg";
import instance from "../../axios";
import { Route } from "react-router-dom";

const clearInputs = () => {
  // Clear all Input fields
  const inputFieldsArr = Array.from(document.querySelectorAll("input"));
  inputFieldsArr.forEach((input) => (input.value = ""));
};

const loginUser = (data) => {
  instance
    .post("/login", {
      auth: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })
    .then((res) => {
      clearInputs();
      console.log(res.data);
    });
};
const registerUser = (data) => {
  instance
    .post("/users", {
      auth: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })
    .then((res) => {
      clearInputs();
      alert("Your Account Have Been Created");
      console.log(res);
    });
};

const Auth = () => {
  return (
    <div className={classes.Auth}>
      <img src={casinoImage} className={classes.Image} alt="Slot machines" />
      <div className="wrapping-default">
        <Route
          path="/register"
          component={() => (
            <Form
              submitMethod={registerUser}
              title="Register"
              btnTxt="Register"
            />
          )}
        />
        <Route
          path="/login"
          component={() => (
            <Form submitMethod={loginUser} title="Login" btnTxt="Login" />
          )}
        />
      </div>
    </div>
  );
};

Auth.propTypes = {
  props: PropTypes.object,
};

export default Auth;
