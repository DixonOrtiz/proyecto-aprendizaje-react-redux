//some constants
export const CHANGE_POSITION = "CHANGE_POSITION";
export const CHANGE_COACH = "CHANGE_COACH";
export const ADD_PLAYER = "ADD_PLAYER";
export const DELETE_PLAYER = "DELETE_PLAYER";

//action creators, are passed as a parameter in the reducers
export function changePosition(position) {
  return { type: CHANGE_POSITION, position };
}

export function changeCoach(coachName) {
  return { type: CHANGE_COACH, coachName };
}

export function addPlayer(playerName) {
  return { type: ADD_PLAYER, playerName };
}

export function deletePlayer(playerIndex) {
  return { type: DELETE_PLAYER, playerIndex };
}
