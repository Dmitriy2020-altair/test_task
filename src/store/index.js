import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)