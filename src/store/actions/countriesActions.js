import * as actionTypes from "./actionTypes/actionTypes";
import instance from "../../axios";

export const fetchCountry = (payload, actionCreator) => {
  return (dispatch) => {
    instance
      .post("/api", payload)
      .then((res) => {
        dispatch(actionCreator(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getSingleCountry = (country) => {
  return {
    type: actionTypes.getSingleCountry,
    country,
  };
};

export const getArrOfCountries = (arrOfCountries) => {
  return {
    type: actionTypes.getArrOfCountries,
    arrOfCountries,
  };
};

export const getAllCountries = (allCountries) => {
  return {
    type: actionTypes.getAllCountries,
    allCountries,
  };
};
