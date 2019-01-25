import React from 'react'

export default function User (props) {
  const changeUsername = e => {
    e.preventDefault()
    props.dispatch({
      type: 'UPDATE_USERNAME',
      user: { username: e.target.username.value }
    })
  }

  return (
    <div id='user'>
      <p>Name: {props.user.name}</p>
      <p>Username: {props.user.username}</p>
      <form onSubmit={changeUsername}>
        <input type='text' name='username' />
        <button>Change username</button>
      </form>
    </div>
  )
}
