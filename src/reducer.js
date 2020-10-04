import { produce } from "immer";

//[]

let idcount = 0;

// when redux will call the reducer function it will take the initial state of the store with the inital state defined
//in the argument of the reducer

export default function reducer(state = [], action) {
  if (action.type === "bugAdded") {
    return produce(state, (modstate) => {
      modstate.push({
        id: ++idcount,
        description: action.payload.description,
        resolved: false,
      });
    });
  } else if (action.type === "bugResolved") {
    return state.map((bug) =>
      bug.id === action.payload.id ? { ...bug, resolved: true } : bug
    );
  } else if (action.type === "bugRemoved") {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else {
    return state;
  }
}
