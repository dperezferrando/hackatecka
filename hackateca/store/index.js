import { createStore,  compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from "../reducers";
import rootEpic from "../epics";

console.log("AA", createEpicMiddleware)
const epicMiddleware = createEpicMiddleware();


const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;