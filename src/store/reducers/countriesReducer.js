import * as actionTypes from "../actions/actionTypes/actionTypes";

const initialState = {};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getSingleCountry:
      state = {
        ...state,
        singleCountry: action.country,
      };
      return state;
    case actionTypes.getArrOfCountries:
      state = {
        ...state,
        arrOfCountries: action.arrOfCountries,
      };
      return state;
    case actionTypes.getAllCountries:
      state = {
        ...state,
        allCountries: action.allCountries,
      };
      return state;
    default:
      return state;
  }
};

export default countriesReducer;
