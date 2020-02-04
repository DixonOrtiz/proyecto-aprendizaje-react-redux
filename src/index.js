import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import teamApp from "./reducers";

import {
  changePosition,
  changeCoach,
  addPlayer,
  deletePlayer
} from "./actions";

let store = createStore(teamApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(changePosition(1));
store.dispatch(changeCoach("Dixon Ortiz"));
store.dispatch(addPlayer("Diego Sepúlveda"));
store.dispatch(addPlayer("Javier Valdivia"));
store.dispatch(addPlayer("Felipe Fuentes"));
store.dispatch(addPlayer("Fabián Alvarado"));
store.dispatch(deletePlayer(2));

unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
