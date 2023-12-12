import React from 'react'
import { UseUserContext } from '../context/UserContext';

const Progress = () => {
    const{percent}=UseUserContext();
    const width=percent + "%";
  return (
    <div>
        <div className="progress" style={{width:"100%",border:"5px black"}}>
            <div className="progress-bar" role="progressbar"
         aria-label="Example with label" aria-valuenow="25" 
         style={{width:width}}
         aria-valuemin="0" aria-valuemax="100">{percent}%
  </div>
</div>
    </div>
  )
}

export default Progress;