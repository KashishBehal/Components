import React, { useState } from 'react'

export const ControlledComponent = () => {

    const [val , setVal]=useState("type here");
  return (
    <div>
        <input onChange={(e)=>setVal(e.target.val)}></input>
        <h1>{val}</h1>
    </div>
  )
}
