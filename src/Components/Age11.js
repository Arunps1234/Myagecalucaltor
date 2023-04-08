import React, { useState , useEffect} from 'react'
import Year from './Year'
import Age22 from './Age22';

const Age11 = () => {

    const [date, setDate] = useState("");
    const[month, setMonth] = useState("");
    const[years,setYears] = useState("");
    const [clicked, setClicked] =useState(false)

    const[showa, setShow]=useState(false)

    const[buttonDisable,setButtondisable]=useState(true)
    
    const data1 = `${years}-${month}-${date}`

    useEffect(()=>{
if(date=="" || month=="" || years==""){
    setButtondisable(true)
}
else{
    setButtondisable(false)
}

    },)


    const submits = (e)=>{
        e.preventDefault();
        setShow(true)
        setClicked(true)
        
    }
    const data = {
        date, month, years
    }

    return (
        <div>
            <form>
          
          {/*Day*/}

                <select value={date} onChange={e => { setDate(e.target.value) }}>
                    <option value="" disabled selected hidden >Select Date</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>

                </select>
                &nbsp; &nbsp;



{/*Month*/}

                <select value={month} onChange={e=>{setMonth(e.target.value)}}>
                    <option value="" disabled selected hidden>Select Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>

                &nbsp; &nbsp;


{/*Year*/}
<select value={years} onChange={e=>{setYears(e.target.value)}}>
<option value="" disabled selected hidden>Select Year</option>

    { Year.map(Y=>(
<option value={Y} key={Y}>{Y}</option> 
    ))
}
</select>
<br/><br/>
<div className={clicked ? "clicks" : ""}>

</div>

<button onClick={submits} id="two" disabled={buttonDisable}>Click</button>
            </form>
            {
                showa &&
<Age22  data1={data1}/>
}
        </div>
    )
}

export default Age11