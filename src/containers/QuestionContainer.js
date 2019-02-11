import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Question from '../components/Question'


const QuestionContainer = props => <Question {...props} />



const mapStateToProps = (state) => {
  
  return {
  questions: _.shuffle(_.values(state.questions)),
  users:    _.shuffle(_.values(state.users)),
  authedUser: state.authedUser
  }
  
}

export default connect(
  mapStateToProps,
  null,
)(QuestionContainer);