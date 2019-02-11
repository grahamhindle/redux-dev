import { handleActions } from 'redux-actions'
import { SET_QUESTIONS,SET_NEW_QUESTION } from '../constants/actionTypes'


export default handleActions(
  {
  [SET_QUESTIONS]: (state, action) => action.payload
  }, 
  {
    [SET_NEW_QUESTION]: (state, action) => action.payload
  },

  {}
)