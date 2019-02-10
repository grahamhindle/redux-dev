import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import Users from '../components/Users'
import { getUsers } from '../actions/userActions'

const UsersContainer = props => <Users {...props} />

const mapStateToProps = state => ({
  users: _.values(state.users),
  authedUser: state.authedUser
})

export default connect(
  mapStateToProps,
  { getUsers },
)(UsersContainer);