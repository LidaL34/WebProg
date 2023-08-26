import React from 'react'
import './button.css'

export function Button ({ onAction,style,label }) {
  return (
    <button type='button' style={style} className='button-style' onClick={onAction}>{label}</button>
  )
}

