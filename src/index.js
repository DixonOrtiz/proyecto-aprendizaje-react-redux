import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//function to create the store
import { createStore } from "redux";
//parameter to create the store
import teamApp from "./reducers";

//action creators
import {
  changePosition,
  changeCoach,
  addPlayer,
  deletePlayer
} from "./actions";

//the store is created
let store = createStore(teamApp);

//print the initial state
console.log(store.getState());

//add a listener to the state
let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(changePosition(1));
store.dispatch(changeCoach("Dixon Ortiz"));
store.dispatch(addPlayer("Diego Sepúlveda"));
store.dispatch(addPlayer("Javier Valdivia"));
store.dispatch(addPlayer("Felipe Fuentes"));
store.dispatch(addPlayer("Fabián Alvarado"));
store.dispatch(deletePlayer(2));

//stop de listener
unsubscribe();

ReactDOM.render(<App />, document.getElementById("root"));
