// Pending Part of tutorial is Here.

import React, { useState, useMemo, useEffect } from 'react';
import './Appp.css';
import Header from './Header';

// # useMemo Hook

// # React loaders 

// import { TailSpin,Bars } from 'react-loader-spinner';

// # React  toastify
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// # React Redux
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc , Dec } from './states/reducers/index';

function Appp() {
  // # useMemo Hook

  //  const [count , setCount] = useState(0);
  //  const [name , setName] = useState('');

  //  const HeavyCalculate =(num) =>{
  //     console.log("Calculating");
  //      for(let i=0; i<= 1000000000; i++){}
  //      return num;
  //  };

  //  const calculation = useMemo(()  =>
  //     HeavyCalculate(count)

  //  ,[count]);

  // # React loaders & toastify

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  // const notify = () => toast("Wow so easy!");  

  // useEffect(() => {

  //   setLoading(true);

    // async function getData() {
    //   const res = await fetch("https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001");
    //   const getRes = await res.json();
    //   setData(getRes);
    //   setLoading(false);
    //   // console.log(getRes);
    //   toast.success("SUCESSFULLY COMPLETED");
    //   notify();
    // }

  //   getData();
  // }, [])

  // # React Redux

const curState = useSelector((state)=> state.number);
const dispatch = useDispatch();
  return (
    <div>
      {/* <ToastContainer/> */}
      {/* useMemo Hook */}

      <Header />
      {/* <button onClick={()=> setCount( count +1)}>Increment</button>
            <h1>Count: {count}</h1>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <h1>Name: {name} </h1> */}

      {/* React loaders & toastify */}
      {/* <TailSpin/> */}
      {/* {
        loading ?
          // <TailSpin />
          <Bars/>
          :
          data.map((e, i) => {
            return (
              <h3 key={i}>{i}  {e.email}</h3>
            )
          })
      } */}

        {/* React-Redux */}
       {/* <h1>{curState}</h1> */}
  {/* <button onClick={() => dispatch(Inc())} >Inc</button> 
      <button onClick={() => dispatch(Dec())}>Dec</button>  */}
      {/* <button onClick={() => dispatch(Inc(10))} >Inc</button>
      <button onClick={() => dispatch(Dec(5))}>Dec</button>  */}
         
    </div>
  )
}

export default Appp;
