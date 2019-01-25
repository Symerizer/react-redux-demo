import React from 'react'

export default function Header (props) {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <h1 style={{ width: '70%' }}>PLAYER 360?</h1>
      <p style={{ alignSelf: 'center', width: '30%' }}>
        Connected user: {props.user.username}
      </p>
    </div>
  )
}
