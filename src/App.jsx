import React, { useState } from 'react'
import { Header, Button, Counter, Footer } from './components'

export function App () {
  const buttonContainerStyle = {
    width: '290px',
    height: '115px',
    margin: '10px auto',
    display: 'flex',
    borderRadius: '200px',
    background: '#8A8EFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const resetStyle = {
    fontSize: '22px',
    background: '#686DE8',
    borderRadius: '100px',
    padding: '10px 30px'
  }

  const [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(0)
  }

  const subtract = () => {
    setCounter(counter > 0 ? counter - 1 : counter)
  }

  return (
    <>
      <Header />
      <div style={buttonContainerStyle}>
        <Button onAction={subtract} label='-' />
        <Counter value={counter} />
        <Button onAction={add} label='+' />
      </div>

        <Button style={resetStyle} onAction={reset} label='Reset' />

      <Footer />

    </>

  )
}
