import { handleActions } from 'redux-actions'
import { SET_USERS } from '../constants/actionTypes'


export default handleActions(
  {
  [SET_USERS]: (state, action) => action.payload
  }, 
  {}
)