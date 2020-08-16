import React from 'react'
import {useSelector} from 'react-redux'
import Alert from 'react-bootstrap/Alert'

const Notification = () => {
    const errors = useSelector(state=>state).error
    if(errors.errorMssg){
        if (!errors.status ) {
      return <Alert variant={"danger"} style = {
        {
          border: 'red solid 2px',
          margin:'15px 0',
          marginTop:'80px'
        }
      } > {
        errors.errorMssg
      } </Alert>
    } else  {
      return <Alert variant={"success"} style = {
        {
          border: 'green solid 2px',
          margin:'15px 0',
          marginTop:'80px'
        }
      } > {
        errors.errorMssg
      } </Alert>
    }}else{
        return null;
    }
  }
  export default Notification;