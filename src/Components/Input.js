import React from 'react';

const Input =({display , value})=>{
    return(
        <div className="f1 center pt4" style={{display:'flex', justifyContent:'center'}}>
        <input type="date" placeholder="Enter Date" onChange={display} value={value}  />
        </div>
    )
}

export default Input;