import React from 'react'
import { connect } from 'react-redux'
import NewQuestion from '../components/NewQuestion'
import { saveQuestion } from '../actions/questionActions'

const NewQuestionContainer = props => <NewQuestion {...props} />

const mapStateToProps = ({authedUser})=> {
  return {
    authedUser,
  }
}
export default connect(
  mapStateToProps,
  { saveQuestion },
)(NewQuestionContainer);