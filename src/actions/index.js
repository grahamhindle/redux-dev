
import { getQuestions,updateQuestion  } from './questionActions'
import { getUsers, updateUserQuestion } from './userActions'
import { setAuthedUser } from './authedUserActions'
import { _saveQuestion, getInitialData, } from '../utils/_Data'
import { apiStart, apiEnd } from './apiActions'


  export function saveNewQuestion(question) {
    return (dispatch) => {
      return _saveQuestion (question)
        .then(({users,questions}) => {
          dispatch (apiStart('GET_QUESTIONS'))
          dispatch(updateUserQuestion(users))
          dispatch(updateQuestion(questions))
          dispatch(apiEnd('GET_QUESTIONS'))
        })
      }
  }
  
    
   

  export function saveQuestion(question) {
    return (dispatch) => {
      return saveNewQuestion(question)
        .then(({questions,users}) => {
          dispatch(getUsers(users))
          dispatch(getQuestions(questions))
        })
      }
  }

  
  export function handleInitialData(){
    return (dispatch) => {
      return getInitialData()
        .then (({users, questions})=> {
          dispatch(getUsers(users))
          dispatch(getQuestions(questions))
          dispatch(setAuthedUser('sarahedo'))
        })
    }
  }
  
