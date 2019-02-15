import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Questions from '../components/Questions'
import { getQuestionData } from '../actions/questionActions'
import {GET_QUESTIONS } from '../constants/actionTypes'

const QuestionsContainer = props => <Questions {...props} />

const mapStateToProps = state => ({
  questions: _.values(state.questions),
  users: state.users,
  loading: state.isLoading[GET_QUESTIONS]
})

export default connect(
  mapStateToProps,
  { getQuestionData },
)(QuestionsContainer);