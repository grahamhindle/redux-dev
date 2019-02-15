import { createSelector } from 'reselect'



const getAnswers = state => (state.users[state.authedUser].answers)
 


export const getAnswerText = (state,props,answered) => {
  
  const answers = getAnswers(state)
  const obj = Object.keys(answers).find(key=> key === props)
  if ( obj&& answered){
    return answers[obj]
  }
  else return 'optionOne'
  
  
  
  
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

