import { combineReducers, createStore } from "redux";
import { newsDataReducer, savedNewsReducer } from "./reducer";

const reducers = combineReducers({
    newsData: newsDataReducer,
    savedNews: savedNewsReducer
})

const store = createStore(reducers)

export default store