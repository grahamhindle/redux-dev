import React, { Component } from "react"
import {Paper,Button, AppBar,Tabs, Tab,TextField} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  dense: {
    marginTop: 19,
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

const  NewQTabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


class NewQuestion extends Component {
  state = {
    value:0,
    open: true,
    optionOneText: '',
    optionTwoText: '',
  }
  componentDidMount(){
   
      }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleQuestion = () => {
    const {optionOneText,optionTwoText} = this.state
    const { author} = this.props
    this.props.saveQuestion({optionOneText, optionTwoText,author})
  }

  
  render() {
    const { classes} = this.props
    const {value} =this.state.value
    return (

       <Paper className={classes.paper}>
         <AppBar  position="static">
           <Button variant="outlined" className={classes.button} color="inherit" onClick={this.handleQuestion}>Save New Question</Button>
           
          
           </AppBar>
         {value === 0 && <NewQTabContainer>New Question</NewQTabContainer>}
         <form className={classes.container} noValidate autoComplete="off">
        <TextField
        onChange={this.handleChange('optionOneText')}
          id="standard-with-placeholder"
          label="Would You Rather"
          placeholder="Option One"
          className={classes.textField}
          margin="normal"
        />     

        <TextField
        onChange={this.handleChange('optionTwoText')}
        id="standard-with-placeholder"
        label="Or..."
        placeholder="Option Two"
        className={classes.textField}
        margin="normal"
      />     

       
        </form>
         </Paper>
    )
  }
}
export default withStyles(styles)(NewQuestion)
