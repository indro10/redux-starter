import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

// createStore took  a function that takes a function that returns updated state and it also passes the current state
// and the action through dispatch method  to the reducer.

export default store;
