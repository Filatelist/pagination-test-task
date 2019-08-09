import { createStore } from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer);

export default store;
