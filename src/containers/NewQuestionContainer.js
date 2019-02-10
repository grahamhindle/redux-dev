import React from 'react'
import { connect } from 'react-redux'
import NewQuestion from '../components/NewQuestion'
import { saveQuestion } from '../actions/questionActions'

const NewQuestionContainer = props => <NewQuestion {...props} />

export default connect(
  null,
  { saveQuestion },
)(NewQuestionContainer);