import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import countriesReducer from "./reducers/countriesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
