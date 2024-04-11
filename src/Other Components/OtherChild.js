import React, {useContext} from 'react';
import {GlobalInfo} from "./App2";

function OtherChild() {
    const {Appcolor} = useContext(GlobalInfo);
    
  return (
    <div>
      <h2 style={{color:Appcolor}} >OtherChild content</h2>
    </div>
  )
}

export default OtherChild;
