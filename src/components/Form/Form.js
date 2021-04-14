import React from "react";
import PropTypes from "prop-types";
import * as classes from "./Form.styles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Form = (props) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <h1 className={classes.Title}>{props.title}</h1>
      <form
        className={classes.Form}
        onSubmit={handleSubmit(props.submitMethod)}
      >
        <label className={classes.Label} htmlFor="name">
          Name:
        </label>
        {errors.name && (
          <span className={classes.ErrorMsg}>Name is required</span>
        )}
        <input
          className={classes.Input}
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          ref={register}
        ></input>
        <label className={classes.Label} htmlFor="email">
          Email:
        </label>
        {errors.email && (
          <span className={classes.ErrorMsg}>A valid Email is required</span>
        )}
        <input
          className={classes.Input}
          type="text"
          id="email"
          name="email"
          ref={register}
        ></input>
        <label className={classes.Label} htmlFor="password">
          Password:
        </label>
        {errors.password && (
          <span className={classes.ErrorMsg}>
            Password is required and must contain a minimum of 8 characters
          </span>
        )}
        <input
          className={classes.Input}
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          ref={register}
        ></input>
        <button type="submit" className={classes.FormButton}>
          {props.btnTxt}
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  inputs: PropTypes.array,
  button: PropTypes.string,
  title: PropTypes.string,
  btnTxt: PropTypes.string,
  submitMethod: PropTypes.func,
};

export default Form;
