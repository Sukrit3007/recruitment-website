import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div>
        <button>{props.text} </button>
    </div>
  )
}

export default Button
