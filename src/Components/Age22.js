import React, { useState, useEffect } from 'react'
import { validateLocaleAndSetLanguage } from 'typescript';

const Age22 = ({ data1 }) => {
    console.log(data1)

    const reloads = () =>{
        window.location.reload()
    }

    const [name, setName] = useState('')
    useEffect(() => {
        let a = localStorage.getItem("Username")
        setName(a)
    }, [])


    const calucalteages = (date) => {
        const today = new Date().getTime();

        const Birthdate = new Date(date).getTime();
        const agemili_seconds = Math.abs(today - Birthdate)
        console.log(agemili_seconds)




        let days = Math.floor(agemili_seconds / (1000 * 3600 * 24))
        console.log(days)
        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;
        // return `${years} years, ${months}  months , ${days} days!`;
        return ` Hey ${name} ,Your age is 
    ${years} year  
    ${months} months and
     ${days} days`

    }

    return (
        <div>

            <h4 >{calucalteages(data1)} </h4>

<button onClick={reloads} className="btn btn-primary">Check other age</button>

        </div>
    )
}

export default Age22