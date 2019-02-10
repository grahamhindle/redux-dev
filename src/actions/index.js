
import { getQuestions } from './questionActions';
import { getUsers } from './userActions';
import { setAuthedUser } from './authedUserActions';


export const getInitialData = () =>  {
  getQuestions()
  getUsers()
  setAuthedUser('grahamhindle')
}