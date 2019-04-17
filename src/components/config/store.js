import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from 'react-router-dom'
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./../../reducers";

const loggerMiddleware = store => next => action => {
  // console.log("Action type:", action.type);
  // console.log("Action payload:", action.payload);
  // console.log("State before:", store.getState());
  next(action);
  // console.log("State after:", store.getState());
};

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(loggerMiddleware, routerMiddleware(BrowserRouter))
)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState);

export default store;
