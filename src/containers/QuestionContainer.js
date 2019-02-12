import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Question from '../components/Question'
import { getSelectedQuestion,getAnswerText, getAnswers } from '../selectors/question';


const QuestionContainer = props => <Question {...props} />



const mapStateToProps = (state,{question,answered}) => {
  
  return {
  questions: _.shuffle(_.values(state.questions)),
  author:    state.users[question.author],
  users:    state.users,
  authedUser: state.authedUser,
  answer: getAnswerText(state,question.id,answered)
  
  
  }
  
}

export default connect(
  mapStateToProps,
  null,
)(QuestionContainer);