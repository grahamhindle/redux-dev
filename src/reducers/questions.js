import { handleActions } from 'redux-actions'
import { GET_QUESTIONS,UPDATE_QUESTION } from '../constants/actionTypes'



const questions =  handleActions(
  {
  [GET_QUESTIONS]: (state,action) => action.payload,
  [UPDATE_QUESTION]: (state, action) => action.payload
  },
  {}
  )
export default questions
