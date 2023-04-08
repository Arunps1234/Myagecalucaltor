import React,{useState} from 'react'
import Age2 from './Age2'
import "./Age1.css"

const Age = () =>{

    const[newDate, setNewDate] = useState("")
    const[Birthday, SetBirthDay]=useState("1999-07-10")
    const[showStatus, setShowStatus] = useState(false)


    //const current_date = new Date().getDate();
    //const current_month = new Date().getMonth();

//const current_year = new Date().getFullYear();

    

    const Submit = () =>{
        //alert( current_year)
       // alert(current_date)
       // alert(current_month);
        //console.log(date)
       // console.log(`the date is ${current_date} and the month is ${current_month} and the year is ${current_year}`)

       SetBirthDay(newDate);
       setShowStatus(true)

    }

    
console.log(Birthday)

    
    return(
        <>
        <div>
<input type="date" value={newDate} onChange={(e)=>{setNewDate(e.target.value)}} disabled={false}/>
        </div>
<br/>
        <button onClick={Submit} id="one">Submit</button>
        <br/>
        { showStatus &&
        
        <Age2 Birthday ={Birthday}/>
}
        </>
    )
}

export default Age