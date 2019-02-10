import { createAction } from "redux-actions"
import { apiPayloadCreator } from "../utils/appUtils"
import { API } from "../constants/actionTypes"
import { GET_USERS, SET_USERS } from '../constants/actionTypes'
import {_getUsers } from '../utils/_Data'

const getUsersAC = createAction(API, apiPayloadCreator)

export const getUsers=() =>
  getUsersAC({dataType: GET_USERS,callingFn: _getUsers(), onSuccess: setUsers,label:"API_START"})


function setUsers(users) {
  return { 
    type: SET_USERS,
    payload: users,
    label:"API_END"
   }
}