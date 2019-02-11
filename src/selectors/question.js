import { createSelector } from 'reselect'
import _ from 'lodash'


export const getAnswers = state => state.users[state.authedUser].answers
  


export const getAnswerText = (state,id) => {
  const answers = getAnswers(state)
   let x =  _.forIn(answers, function (value,key ){
      if ( key === id){
        console.log(value)
        return value
      }
        
    })
}

export const getSelectedQuestion = (answered,id) => createSelector(
  [getAnswers],
  (answers,answered,id) => {
    if ( !answers)
    return
    const x = answers.filter(key => key = id)
  switch ( answered) {
    case 0:
    return x
    case 1:
      return x
    default:
      break;

  }
  }
)

