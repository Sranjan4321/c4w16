// create store here
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

// do not remove this code, its for testing purpose
const rootReducer = combineReducers({ reducer });

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
if (window.Cypress) {
  window.store = store;
}

// other store enhancers if any
