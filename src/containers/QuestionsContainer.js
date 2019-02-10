import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Questions from '../components/Questions'
import { getQuestions } from '../actions/questionActions'

const QuestionsContainer = props => <Questions {...props} />

const mapStateToProps = state => ({
  questions: _.shuffle(_.values(state.questions)),
  users: state.users
})

export default connect(
  mapStateToProps,
  { getQuestions },
)(QuestionsContainer);