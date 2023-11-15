import { applyMiddleware, createStore } from "redux";
// import counterReducer from "./services/reducers/counterReducer";
import todosReducer from "./fetchdata/reducers/todosReducer";
import thunk from "redux-thunk";


const store = createStore(todosReducer, applyMiddleware(thunk));
export default store;