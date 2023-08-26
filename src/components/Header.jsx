import React from 'react'

export function Header () {
  const headerStyle = {
    color: '#8A8EFF',
    fontSize: '3rem'
  }

  return (
    <header>
      <h1 style={headerStyle}>The Counter</h1>
    </header>
  )
}
