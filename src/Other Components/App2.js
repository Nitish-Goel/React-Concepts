// context api by code step by step

import React, {createContext, useState} from 'react';
import Child from './Child';
import OtherChild from './OtherChild';


const GlobalInfo = createContext();
function App2() {
    const [color, Setcolor] = useState("blue");
    const [day , setDay] = useState("Monday");
    const getDay = (item)=>{
        console.log(item);
        setDay(item);
    }
  return (
    <GlobalInfo.Provider value={{Appcolor:color , currentDay :getDay }}>
    <div>
      <h1>App content {day} </h1>

      <Child/>
      <OtherChild/>
    </div>
    </GlobalInfo.Provider>
  )
}

export default App2;
export  {GlobalInfo};
