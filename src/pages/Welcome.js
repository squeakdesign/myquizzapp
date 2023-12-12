import React from 'react'
import{BsArrowDown}from 'react-icons/bs'
import{Link}from 'react-router-dom'
import { UseUserContext } from '../context/UserContext'
const Welcome = () => {
    const{startTimer}=UseUserContext();
  return (
    <center>
     <div className='display-5'> Welcome To  Quiz App </div>   
    <br/>
    <div className='display-5'>Click Here To Start</div>
    <br/>
    <div className='display-5'><BsArrowDown></BsArrowDown></div>
    <br/>
    <Link to="/quiz"className='display-5'style={{"textDecoration":"none"}}onClick={startTimer}>Click Here</Link>
    
    </center>
  )
}

export default Welcome