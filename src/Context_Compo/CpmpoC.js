import React,{useContext} from 'react';

import { AppState } from '../App';
import { NameContext } from '../App';


const CpmpoC = () => {
    const AppContext = useContext(AppState);
    const NameDetail = useContext(NameContext);
  return (
    <div>
      <h3>Component 3</h3>
      <h3>{AppContext.data}</h3>
      <h3>Name :{AppContext.detail.name}</h3>
      <h3>Age :{AppContext.detail.age}</h3>
      <h2>{NameDetail.name}</h2>
      <h2>{NameDetail.age}</h2>
    </div>
  )
}

export default CpmpoC;
