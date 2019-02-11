import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar'
import { getUserByAuthor,getUnansweredQuestions,getAnsweredQuestions } from '../utils/appUtils';



const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.primary.main,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '50%',
  },
  column2: {
    flexBasis: '50%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  button: {
    color: theme.palette.primary.main,
    backgroundColor: '#eeeeee',
    },
    bigAvatar: {
      margin: 20,
      width: 90,
      height: 90,
    },
    smallAvatar: {
      margin: 2,
      width: 20,
      height: 20,
    },
  
})
class Question extends Component {
  state={
    value:0,
  }
  render() {

    const {  classes,questions,question,users,answered,authedUser} = this.props
    const { value } = this.state.value

    console.log('props',users.id)

    const author = getUserByAuthor(this.props.users, question.author)
    console.log( 'here again',users[authedUser].answers)
    /*let displayQuestion = []
    if (answered === 0) {
      displayQuestion = getUnansweredQuestions(users[authedUser].answers,question.id)  
    } else {
      displayQuestion = getAnsweredQuestions(users[authedUser].answers,question.id)
     
    }
    //
*/

    return (
      <div className={classes.root}>
      <ExpansionPanel  defaultExpanded={false}>
        <ExpansionPanelSummary className={classes.button} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
          <Avatar className={classes.smallAvatar} 
            alt={`Avatar n°${author.author + 1}`}
            src={author.avatarURL}
              />
            <Typography className={classes.secondaryHeading}>{`${author.name} asks:`}</Typography>
          </div>
            <Typography 
              variant='caption' 
              className={classNames(classes.column, classes.heading)}
            >
            Would You Rather...
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Avatar className={classes.bigAvatar} 
            alt={`Avatar n°${author.name + 1}`}
            src={author.avatarURL}
              />
          <div className={classes.column} />
          <div className={classNames(classes.column, classes.secondaryHeading)}>
          <RadioGroup
            aria-label="answers"
            name="answer11"
            className={classes.group}
            value={value}
            onChange={ this.handleChange}
          >
          <FormControlLabel value={'optionOne'}  control={<Radio />} label={question.optionOne.text} />
          <FormControlLabel value={'optionTwo'}  control={<Radio />} label={question.optionTwo.text} />
          </RadioGroup>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
         
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
    )
  }
}
export default withStyles(styles)(Question)