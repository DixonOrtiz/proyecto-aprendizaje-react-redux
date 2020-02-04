//associate the reducers in a single reducer called teamApp
import { combineReducers } from "redux";

import {
  CHANGE_POSITION,
  CHANGE_COACH,
  ADD_PLAYER,
  DELETE_PLAYER
} from "./actions";

//reducer associated with the value of the position of the state
function position(state = 0, action) {
  switch (action.type) {
    case CHANGE_POSITION:
      return action.position;
    default:
      return state;
  }
}

//reducer associated with the value of the coach of the state
function coach(state = "", action) {
  switch (action.type) {
    case CHANGE_COACH:
      return action.coachName;
    default:
      return state;
  }
}

//reducer associated with the value of the array players[] of the state
function players(state = [], action) {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          playerName: action.playerName
        }
      ];

    case DELETE_PLAYER:
      let newState = state;
      newState.splice(action.playerIndex, 1);

      return newState;

    default:
      return state;
  }
}

////teamApp is passed as a parameter in the 'let store = createStore(teamApp);'
const teamApp = combineReducers({
  position,
  coach,
  players
});

export default teamApp;
