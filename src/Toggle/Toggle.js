import React, { useState } from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <div style={{margin:'1rem', backgroundColor:"pink", padding:'1rem' }}>
       {toggle && <p>Lorem ipsum dolar set amet consectetur adipising elit. Cum vel ipsum error ex? Lorem ipsum dolar set amet consectetur adipising elit. Cum vel ipsum error ex?Lorem ipsum dolar set amet consectetur adipising elit. Cum vel ipsum error ex?</p>} 
        <div style = {{textAlign:'center'}}>
            <button onClick = {() => setToggle(!toggle)}>{toggle ? "Hide" : "Show"}</button>
        </div>
    </div>
  )
}

export default Toggle