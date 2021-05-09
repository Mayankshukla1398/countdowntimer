import React from 'react';

const Timer =({days,hours,minutes,seconds})=>{
    return(
        <div className="ba bw3 lightest-blue">
       <h1><span>{days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds </span></h1> 
    </div>
    )
}
export default Timer;