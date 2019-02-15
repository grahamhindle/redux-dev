import { createAction } from "redux-actions"
import { apiPayloadCreator } from "../utils/appUtils"
import { API } from "../constants/actionTypes"
import { SET_QUESTIONS, SET_NEW_QUESTION } from '../constants/actionTypes'
import {_getQuestions, _saveQuestion } from '../utils/_Data'

const getQuestionsAC = createAction(API, apiPayloadCreator)


export const getQuestions=() =>
  getQuestionsAC({callingFn: _getQuestions(), onSuccess: setQuestions,label:"GET_QUESTIONS"})

function setQuestions(questions) {
  return { 
    type: SET_QUESTIONS,
    payload: questions,
    label: "API_END"
   }
}

export const saveQuestion=(question) =>{
  return{
    type:API,
    payload:{callingFn: _saveQuestion(question), onSuccess: setNewQuestion,label:"API_START"}
  }
}


function setNewQuestion(data) {
  console.log('setnewq',data)
  return { 
    type: SET_NEW_QUESTION,
    payload:data,
    
   }
}