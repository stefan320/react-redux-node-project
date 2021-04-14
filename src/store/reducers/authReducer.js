import * as actionTypes from "../actions/actionTypes/actionTypes";
const initialState = {
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.registerUser:
      console.log(action, state);

      break;
    default:
      break;
  }
};

export default authReducer;
