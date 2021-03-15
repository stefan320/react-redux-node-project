import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  test: "TEST DATA",
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.actionExample:
      return console.log(actionTypes.actionExample);
    default:
      return state;
  }
};

export default countriesReducer;
