import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Results from "../../components/Results/Results";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actionCreators from "../../store/actions/countriesActions";
import InputWLabel from "../../components/Input/Input";
import * as classes from "./Countries.styles.module.css";

const Countries = (props) => {
  const questions = {
    q1:
      "Send a request from the frontend to the backend with a string 'countryName' which the backend will use to return a single matched country.",
    q2:
      "Send a request from the frontend to the backend with an array of string ‘countryNames’ which will return a list of countries partly matching any of the strings.",
    q3:
      "List all the countries on the client and create a field to filter them by name.",
  };

  let [searchField, updateField] = useState(null);

  //compare All country names passed from the store with the string inputed in the search field and return the countries that fully or partial match the string
  let allCountries = searchField
    ? props.allCountries.filter((country) => {
        return country.name.toLowerCase().includes(searchField.toLowerCase());
      })
    : props.allCountries;

  return (
    <div className="wrapping-default">
      <h1>Questions</h1>
      <div className={classes.container}>
        <p>{questions.q1}</p>
        <Button
          clicked={() =>
            props.getCountry({
              searchBy: "name",
              country: "Indonesia",
              isFullName: true,
            })
          }
        >
          Get Country
        </Button>
        {props.singleCountry ? (
          <Results countries={props.singleCountry} />
        ) : null}
      </div>
      <div className={classes.container}>
        <p>{questions.q2}</p>
        <Button
          clicked={() =>
            props.getCountriesFromArr({
              searchBy: "name",
              country: ["ger", "ind"],
              isFullName: false,
            })
          }
        >
          Get Countries
        </Button>
        {props.arrOfCountries ? (
          <Results countries={props.arrOfCountries} />
        ) : null}
      </div>
      <div className={classes.container}>
        <p>{questions.q3}</p>
        <Button
          clicked={() =>
            props.getAllCountries({
              searchBy: "all",
            })
          }
        >
          Get All Countries
        </Button>
        {props.allCountries ? (
          <div>
            <h2>Results</h2>
            <InputWLabel
              name={"search"}
              label={"Search"}
              type={"search"}
              changed={(ev) => updateField((searchField = ev.target.value))}
            />
            <Results countries={allCountries} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const countries = state.countries;
  return countries;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCountry: (search) => {
      return dispatch(
        actionCreators.fetchCountry(search, actionCreators.getSingleCountry)
      );
    },
    getCountriesFromArr: (search) => {
      return dispatch(
        actionCreators.fetchCountry(search, actionCreators.getArrOfCountries)
      );
    },
    getAllCountries: (search) => {
      return dispatch(
        actionCreators.fetchCountry(search, actionCreators.getAllCountries)
      );
    },
  };
};

Countries.propTypes = {
  props: PropTypes.object,
  state: PropTypes.object,
  getCountry: PropTypes.func,
  getCountriesFromArr: PropTypes.func,
  getAllCountries: PropTypes.func,
  singleCountry: PropTypes.array,
  arrOfCountries: PropTypes.array,
  allCountries: PropTypes.array,
  countries: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
