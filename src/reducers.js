import { combineReducers } from "redux";

import {
  CHANGE_POSITION,
  CHANGE_COACH,
  ADD_PLAYER,
  DELETE_PLAYER
} from "./actions";

function position(state = 0, action) {
  switch (action.type) {
    case CHANGE_POSITION:
      return action.position;
    default:
      return state;
  }
}

function coach(state = "", action) {
  switch (action.type) {
    case CHANGE_COACH:
      return action.coachName;
    default:
      return state;
  }
}

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

const teamApp = combineReducers({
  position,
  coach,
  players
});

export default teamApp;
