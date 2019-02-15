import { handleActions } from "redux-actions";
import produce from "immer";
import { API_START, API_END,GET_QUESTIONS } from "../constants/actionTypes";

export default handleActions(
  {
    [API_START]: produce((state, action) => {
      if (action.payload === GET_QUESTIONS) state[GET_QUESTIONS] = true;
    }),
    [API_END]: produce((state, action) => {
      if (action.payload === GET_QUESTIONS) state[GET_QUESTIONS] = false;
    })
},
{} );
