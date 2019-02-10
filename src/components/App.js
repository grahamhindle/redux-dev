import React from 'react'
import { Route } from 'react-router-dom'
import StyledHomeContainer from '../styled/StyledHomeContainer'
import UsersContainer from '../containers/UsersContainer'
import QuestionsContainer from '../containers/QuestionsContainer'
import AuthedUserContainer from '../containers/AuthedUserContainer'
import NewQuestionContainer from '../containers/NewQuestionContainer'
import MainMenu from './MainMenu'

const App = () => {
  return (
  <StyledHomeContainer >
   
    <Route exact path = '/' component={UsersContainer} />
    <Route exact path = '/newq' component={NewQuestionContainer} />
    <Route exact path = '/score' component={QuestionsContainer} />
    <Route exact path = '/profile'component={AuthedUserContainer} />
    <MainMenu />
  </StyledHomeContainer>
  
  )
}
export default App