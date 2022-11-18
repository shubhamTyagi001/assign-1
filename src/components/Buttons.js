import React from 'react'
import { useState } from 'react';

import Label from './Label';

function Buttons() {
    const[count,setcount] = useState(0);
     function incerment(){
    console.log('button 1');
    setcount(count+2)
  }
   function decremrnt(){
      console.log(' button 2');
    setcount(count-1)
  }
  return (
    <div>
        <Label name = {count}/>
    <button onClick={incerment}>Increment</button><br/>
    <button onClick={decremrnt}>Decrement</button>
    </div>
  )
}

export default Buttons