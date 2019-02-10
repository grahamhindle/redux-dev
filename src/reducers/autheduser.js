import { handleActions } from 'redux-actions';
import { SET_AUTHED_USER } from '../constants/actionTypes'

export default handleActions(
  {
  [SET_AUTHED_USER]:(state,action) => action.payload
  },
  "sarahedo"
)