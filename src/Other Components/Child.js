import React, {useContext} from 'react';
import {GlobalInfo} from "./App2";
import SuperChild from './SuperChild';

function Child() {
    const {Appcolor} = useContext(GlobalInfo);
    
  return (
    <div>
      <h2 style={{color:Appcolor}} >Child content</h2>
      <SuperChild/>
    </div>
  )
}

export default Child;
