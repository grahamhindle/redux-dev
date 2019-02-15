import { handleActions } from 'redux-actions'
import { SET_QUESTIONS,SET_NEW_QUESTION } from '../constants/actionTypes'

import _ from 'lodash'

export default handleActions(
  {
  [SET_QUESTIONS]: (state, action) => action.payload
  },
  {
  [SET_NEW_QUESTION]: (state, action) => {
    console.log('snq',action.payload)
     return  _.assign({}, state, action.payload.questions,action.payload.users)
  }
  },
  {},
)