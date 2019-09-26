import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import financialReducer from "./reducers/financialReducer";

const initialState = {};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducers = combineReducers({
  financialReducer
});

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, initialState, enhancer);

export default store;
