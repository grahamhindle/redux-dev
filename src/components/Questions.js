import React, { Component } from 'react'
import {Paper} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import QuestionContainer from '../containers/QuestionContainer'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    margin:'auto',
    marginTop: '25px',
    padding: '20px',
    backgroundColor: '#eeeeee',
    width: '50%',
    maxHeight: '300',
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
})

const  TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}



class  Questions extends Component {
  state = {
    open: true,
    fullWidth: true,
    maxWidth: 'sm',
    value: 0
  }
  

  componentDidMount(){
    
    this.props.getQuestions()
    this.setState({open: true}); 
    
  }

  handleClose = (event, value) => {
      
    this.setState({open: false}); 
  }
  handleChange = (event, value) => {
    console.log('tab',value)
      this.setState({value: value}); 
    }
  render(){
    const { classes,  questions,...props} = this.props
    const {value} =this.state.value
    return (
      <Paper className={classes.paper}>
         <AppBar  position="static">
           <Tabs variant='fullWidth' value={this.state.value} onChange={this.handleChange}>
             <Tab label="Unanswered" />
             <Tab label="Answered" />
             
           </Tabs>
         </AppBar>
         {value === 0 && <TabContainer>Unanswered</TabContainer>}
         {value=== 1 && <TabContainer>Answered</TabContainer>}
         { questions.map((question)=> (
          <div key={question.id}>
          <QuestionContainer key={question.id} 
            question={question}
            answered={this.state.value}
            >
            </QuestionContainer>
          </div>
        ))}

        
         </Paper>
       
    )
  }
}
 
    
export default withStyles(styles)(Questions)
