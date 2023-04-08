import React from 'react'




const Age2 = ({Birthday}) =>{
    console.log(Birthday)
    

    const calculateAge = (date) =>{
const today = new Date().getTime();
const birthday = new Date(date).getTime();
const age_mili = Math.abs(today-birthday) 


let days = Math.floor(age_mili / (1000 * 3600 *24)) ;
let years = Math.floor(days/365);
days-=years*365;
let months = Math.floor(days/31);
days-=months*31;

return `${years} years, ${months}  months , ${days} days!`;
    }




    return(
<div>
<h4>Congrats on {calculateAge(Birthday)}</h4>
</div>
    )
}

export default Age2