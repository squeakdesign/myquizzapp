import React from 'react'
import { UseUserContext } from '../context/UserContext'
import { questions } from '../question';
const Result = () => {
    const {mark}=UseUserContext();
  return (
    <div>Your Score is {mark}/{questions.length}</div>
  )
}

export default Result