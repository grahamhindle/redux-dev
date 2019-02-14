import { createAction } from "redux-actions"
import { apiPayloadCreator } from "../utils/appUtils"
import { API } from "../constants/actionTypes"
import { SET_QUESTIONS, SET_NEW_QUESTION } from '../constants/actionTypes'
import {_getQuestions, _saveQuestion } from '../utils/_Data'

const getQuestionsAC = createAction(API, apiPayloadCreator)

export const getQuestions=() =>
  getQuestionsAC({callingFn: _getQuestions(), onSuccess: setQuestions,label:"API_START"})


function setQuestions(questions) {
  return { 
    type: SET_QUESTIONS,
    payload: questions,
    label: "API_END"
   }
}
//now save the new question
const saveQuestionAC = createAction(API, apiPayloadCreator)

export const saveQuestion=(question) =>{

console.log('AC', question)
  saveQuestionAC({callingFn: _saveQuestion(question), onSuccess: setNewQuestion,label:"API_START"})
}


function setNewQuestion(question) {
  console.log(question)
  return { 
    type: SET_NEW_QUESTION,
    payload: question,
    label: "API_END"
   }
}