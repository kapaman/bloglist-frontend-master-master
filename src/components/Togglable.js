
import React, { useState } from 'react'
import propTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
    let ogwidth=document.querySelector('#fullWidth').style.width;
    document.querySelector('#fullWidth').style.border=ogwidth=='100%'?'':'1px solid black';
    document.querySelector('#fullWidth').style.padding=ogwidth=='100%'?'':'2.5vw';
    document.querySelector('#fullWidth').style.width=(ogwidth=='100%'?"":'100%')
    document.querySelector('#fullWidth').style.marginTop=(ogwidth=='100%'?"":'1rem')
    document.querySelector('#fullWidth').style.backgroundColor=(ogwidth=='100%'?"":'#f8f8f8')
  }
  return (
    <div>
      <div style={hideWhenVisible} >
        <Button onClick={toggleVisibility} className={props.buttonLabel} >{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible} className="Togglable">
        {props.children}
        <Button onClick={toggleVisibility} style={{margin:'5px 0'}}>{props.removeButton?props.removeButton:'cancel'}</Button>
      </div>
    </div>
  )
}

Togglable.propTypes={
  buttonLabel : propTypes.string.isRequired,
}
export default Togglable