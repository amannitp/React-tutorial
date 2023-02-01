import React from 'react'
import './UseStateHooks.css'
import { useState } from 'react'
function UseStateHooks() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1 className='hooksStyle'>Hello this is useState hooks concept</h1>
        <h1 className='heading' style={{fontSize:'50px'}}>{count}</h1>
        <button className='btn' onClick={()=>setCount(count+1)}>increment</button>
        <button className='btn' onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default UseStateHooks