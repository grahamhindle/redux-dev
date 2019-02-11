import React, { Component } from "react"


class NewQuestion extends Component {
  componentDidMount(){
   
    let question = {
      optionOneText:'ice cream',
      optionTwoText:' chocoloate',
      author: 'sarahedo'
    }
    this.props.saveQuestion(question)
  }
  render() {
    return (
      <div>NewQuestion</div>  
    )
  }
}
export default NewQuestion
