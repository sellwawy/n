import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import reducer from "../reducers";

/**
 * Configure store
 *
 * @param {*} initialState
 */
export default function configureStore(initialState = {}) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
}
