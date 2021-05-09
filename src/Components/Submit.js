import React from 'react';

const Submit =({submit})=>{
    return(
        <div className="f2 red pt4 dim" style={{display:'flex', justifyContent:'center'}}>
        <button type="submit" onClick={submit} style={{background :'rgb(100, 170, 170)'}}>Submit</button>
        </div>
    )
}

export default Submit;