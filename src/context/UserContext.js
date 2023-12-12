import { useContext,createContext,useState} from "react";
import { answers} from "../question";
import { questions } from "../question";
export const UserContext= createContext(null);

const final_answers=[];
var percent=0;

const UserContextProvider=({children})=>{

    
    const [index,setIndex]=useState(0);
    const [value,setValue]=useState("");
    const[mark,setMark]=useState(0);
    const[time,setTime]=useState({hr:0,min:0,sec:0,ms:0});
    const[inter,setInter]=useState();

    var updatedHr=time.hr,updatedMin=time.min,updatedSec=time.sec,updatedMs=time.ms;
    
    
    //functions
    const startTimer=()=>{
        run();
        setInter(setInterval(run,10));
    }

    const run=() =>{
       if(updatedMin===60){
        updatedHr++;
        updatedMin=0;
        } 
        if(updatedSec===60){
            updatedMin++;
            updatedSec=0;
        }
        if(updatedMs===100){
            updatedSec++;
            updatedMs=0;
        }
        updatedMs++;
        return setTime({ms:updatedMs,sec:updatedSec,min:updatedMin,hr:updatedHr})
    }

    const calcMark=()=>{
        if(final_answers.includes(answers[index])){
            setMark(prev=>prev+1)
        }
    }
    const next=()=>{
        if(value===""){
           alert("Please select a value") ;
           return
        }
        percent=percent + (100/questions.length);
        final_answers.push(value);
        calcMark();
        setIndex(prev =>prev+1);
    }

    const submit=()=>{
        final_answers.push(value);
        calcMark();
    }


    const onRadioChange=(e)=>{
        setValue(e.target.value)
        console.log(value)
    }

  return(
    <UserContext.Provider value={{index,next,value,onRadioChange,submit,mark,startTimer,time,inter,percent}}>
    {children}
    </UserContext.Provider>
  )
}
export const UseUserContext = () =>{
    const {index,next,value,onRadioChange,submit,mark,startTimer,time,inter,percent}=useContext(UserContext);
    return{index,next,value,onRadioChange,submit,mark,startTimer,time,inter,percent};
}

export default UserContextProvider;