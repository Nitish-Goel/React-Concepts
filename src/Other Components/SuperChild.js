import React, {useContext} from 'react';
import {GlobalInfo} from "./App2";

function SuperChild() {
    const {Appcolor, currentDay } = useContext(GlobalInfo);
    const day="Sunday";
  return (
    <div>
      <h2 style={{color:Appcolor}} >SuperChild content</h2>
      <button onClick={()=>currentDay(day)} >Smash Me</button>
    </div>
  )
}

export default SuperChild;
