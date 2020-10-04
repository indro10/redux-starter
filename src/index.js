import store from "./store";

store.subscribe(() => {
  console.log("state changed");
});
store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug!",
  },
});
store.dispatch({
  type: "bugResolved",
  payload: {
    id: 1,
  },
});
