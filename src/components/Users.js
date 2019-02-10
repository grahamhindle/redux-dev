import React, { Component } from 'react'



class Users extends Component {

  componentDidMount() {
    console.log(this.props.authedUser)
    console.log(this.props.getUsers())
  }
  render () {
    
    return (

      <div>
      {this.props.users.map(user => (
        <div
        style={{
          border: '1px solid blue',
          backgroundColor: 'white',
          margin: '1rem'
        }}
          key={user.id}
          >
          {user.name}
          {user.avatarURL}
       </div>
      ))}
      </div>
    )
  }
}

export default Users
