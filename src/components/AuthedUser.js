import React, { Component } from 'react'



class AuthedUser extends Component {

  componentDidMount() {
    
    this.props.setAuthedUser("grahamhindle");
    console.log(this.props.getAuthedUser())

    console.log('users',this.props.users)
  }
  render () {
    
    return (
      <div>
        {this.props.authedUser}
      </div>
      
      
    )
  }
}

export default AuthedUser
