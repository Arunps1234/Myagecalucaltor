import React from 'react'

const Age22 = ({data1}) =>{
    console.log( data1)

    const calucalteages = (date) =>{
        const today = new Date().getTime();

    const Birthdate = new Date(date).getTime();
    const agemili_seconds = Math.abs(today-Birthdate)
    console.log(agemili_seconds)





    let days= Math.floor(agemili_seconds/(1000*3600*24))
    console.log(days)
    let years = Math.floor(days/365);
    days-=years*365;
    let months = Math.floor(days/31);
    days-=months*31;
   // return `${years} years, ${months}  months , ${days} days!`;
    return `Your age is 
    ${years} year  
    ${months} months 
     ${days} days`

    }

    return(
        <div>
            
<h4>{calucalteages(data1)}</h4>


        </div>
    )
}

export default Age22