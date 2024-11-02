import React from 'react'
import "./Buttons.css"

const Buttons = ({label,buttonStyle,onPress,isDisabled}) => {
  return (
    <div>
        <button className='main-button' style={buttonStyle} onClick={onPress} disabled={isDisabled}>{label}</button>
    </div>
  )
}

export default Buttons