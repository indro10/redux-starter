import reducer from "./reducer";

function CustomStore(reducer) {
  let state;
  let listeners = [];
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  function getState() {
    return state;
  }
  function subscriber(listener) {
    listeners.push(listener);
  }

  return {
    dispatch,
    getState,
    subscriber,
  };
}
export default CustomStore(reducer);
