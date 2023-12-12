import React from 'react'
import "./Quiz.css"
import Border from '../components/Border'
import { questions } from '../question'
import { UseUserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import Result from '../pages/Result'
import Progress from '../components/Progress'

const Quiz = () => {
    const {index,next,value,onRadioChange,submit,time,inter}=UseUserContext();
    const{id,q,o1,o2,o3}=questions[index];
  return (
<>
{time.sec !==10 ?
    <div className='center'>
        <center className='display-5'>Quiz App</center>
    <Border>    
        <div className='content'>
        <p>{id} - {q} </p>
        <ul>
            <li>
                <label>
                <input type="radio"
                value={o1}
                checked={value===o1}
                onChange={onRadioChange}>


                </input>
                <span className='p-2 h5'>{o1}</span>
                </label>
            </li>
            <li>
                <label>
                <input type="radio"
                value={o2}
                checked={value===o2}
                onChange={onRadioChange}></input>
                <span className='p-2 h5'>{o2}</span>
                </label>
            </li>
            <li>
                <label>
                <input type="radio"
                value={o3}
                checked={value===o3}
                onChange={onRadioChange}></input>
                <span className='p-2 h5'>{o3}</span>
                </label>
            </li>
        </ul>
        {index === questions.length - 1 ?
        <Link to="/result" className='display-5' onClick={submit}style={{"textDecoration":"none"}}>Submit</Link> :
        <button className='btn btn-primary' onClick={next}>next</button>
    
    }
        
        
        </div>
    </Border>
    <Progress/>
    <div className='display-5 text-center'>
    {time.min}:{time.sec}
    </div> 
    </div>:
    <>
    {clearInterval(inter)}
    <Result/>
    </>
    }
    </>
  )
}

export default Quiz