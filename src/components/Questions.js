import React, { Component } from 'react'
import {Paper} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import QuestionContainer from '../containers/QuestionContainer'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    flex: 'flexGrow',
    margin:'auto',
    marginTop: '25px',
    padding: '20px',
    backgroundColor: '#eeeeee',
    width: '50%',
    maxHeight: '500',
    overflow: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
      
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
  state={
    value:0,
    open:true
  }

  componentDidMount(){
    
    this.props.getQuestions()
    
  }
  render(){
    const { classes,  questions,...props} = this.props
    const {value} =this.state.value

  
  const handleChange = (event, value) => {
    console.log('tab',value)
      this.setState({value: value}); 
    }


    return (
      <Paper className={classes.paper}>
      
         <AppBar position="static">
           <Tabs variant='fullWidth' value={this.state.value} onChange={handleChange}>
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
