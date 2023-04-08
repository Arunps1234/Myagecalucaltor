import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router'

const Login = ({getusename})=>{

const [btnDisable, setDisable]=useState(true);
const[uname,setUname]=useState("");
const[password,setPassword]=useState("");


useEffect(()=>{
    if(uname=="" || password==""){
        setDisable(true)
    }
    else{
        setDisable(false)
    }

})
    const move=useNavigate()
    const Submitbtn = ()=>{
move("/Home")

    }
    return(
        <div>
            <form className='form-group' style={{width:"50%", margin:"25% 25% 25% 25%" }}>
                <input type="text" className='form-control' placeholder='Username' value={uname} onChange={e=>{setUname(e.target.value)}}></input>
                <br/>
                <input type="password" className='form-control' placeholder='Password' value={password} onChange={e=>{setPassword(e.target.value)}}></input>
<br/>
                <button className='btn btn-success' style={{width:"100%"}} onClick={Submitbtn} disabled={btnDisable}>Submit</button>
            </form>

        </div>
    )
}
export default Login