import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/404error.png"
import Button from '../UI/Button'

const NotFound = () => {
  return (
    <div id='notFound' >
      <Link to='/'>
        <Button text='Back To Home' />
      </Link>
        <img src={error} alt="404error"/>
    </div>
  )
}

export default NotFound