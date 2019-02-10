import React, { Component } from 'react'
import {Paper} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Question from './Question'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    flexGrow: 1,
    margin:'auto',
    padding: '25px',
    backgroundColor: '#eeeeee',
    width: '50%',
  }
})

const  TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}



class  Questions extends Component {
  state={
    value:0,
  }
  render(){
    const { classes,  questions,...props} = this.props
    const {value} =this.state.value

    console.log("questions", this.props)
    const  handleChange = (event, value) => {
    
      let rvalue = false
      value === 1 ? 
        rvalue = true : rvalue = false
        
      }
    return (
      <Paper className={classes.paper}>
         <AppBar position="static">
           <Tabs variant='fullWidth' value={value} onChange={handleChange}>
             <Tab label="Unanswered" />
             <Tab label="Answered" />
           </Tabs>
         </AppBar>
         {value === 0 && <TabContainer>Unanswered</TabContainer>}
         {value=== 1 && <TabContainer>Answered</TabContainer>}
         { questions.map((question)=> (
          <div key={question.id}>
          <Question key={question.id} 
            question={question}
            answered={value}
            >
            </Question>
          </div>
        ))}

         </Paper>
       
    )
  }
}
 
    
export default withStyles(styles)(Questions)
