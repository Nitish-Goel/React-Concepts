// React by web3Mantra

import './App.css';
// #Components & import/export
// import Footer from './Footer';
// import Header from './Header';

// #Props & Props-type
import Student from './Student';

// #// Project Movies Website
import Header from './ProjectComponents/Header';
import Movie from './ProjectComponents/Movie';
import moviesData from "./ProjectComponents/data.json";

// #React Hooks
//useState
import React, { useState, useEffect, createContext, useRef, useReducer} from 'react';

// #Record Keeping Project
// import HEADER from './Record Keeping Project/Header';
// import { Button, Stack, TextField } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// // import DeleteIcon from '@mui/icons-material/Delete';
// import Field from './Record Keeping Project/Field';

// #useEffect Hook
// #Events

// #React Router-DOM
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Routertut/Home';
// import About from './Routertut/About';
// import Error from './Routertut/Error';
// // NavLink hook in reactRouter
// import Header from './Routertut/Header';
// // useNavigate hook in reactRouter
// // Nested routes
// import Contact from './Routertut/Contact';
// import Mail from './Routertut/Mail';
// import Insta from './Routertut/Insta';

// # Context API
// import CompoA from './Context_Compo/CompoA';

// const AppState = createContext();
// const NameContext = createContext();

// # useRef() Hook

// # useReducer hook

// const reducer = (state, action) => {
    //     // console.log("State :",state);
    //     // console.log("Action :",action);
    //     switch (action.type) {
        //         case "INC": return state + 1; break;
        //         case "DEC": return state - 1; break;
        //         case "MUL": return state * 2; break;
        //     }
        //     return state;
        // }
        
        // #React Custom Hook 
import useFetch from './Custom_Hook/useFetch';
        
        


        function App() {
    // let name = "Nitish";


    // #usestate hook
    // const [num, setNum] = useState(0);

    //   const Inc= ()=>{
    //     setNum(num +1);
    //   }

    //   function Dec(){
    //     setNum(num-1);
    //   }


    // #Record Keeping Project

    // const [name , setName] = useState("");
    // const [email , setEmail] = useState("");
    // const [data , setData] = useState([]);
    // const addData =()=>{
    //     setData([ ...data,{name:name,email:email}])
    // setName("");
    // setEmail("");
    // };

    // const removeItem = (index)=>{
    //    let arr = data;
    //    arr.splice(index,1);
    //     setData([...arr]);
    // };


    // # Events
    // const handlePress =(event)=>{
    //      if(event.key == 'Enter')
    //      addData();
    //      console.log(event.key);
    // }



    // // #useEffect Hook
    // const [state , setState] = useState(2);
    // const [data , setData] = useState([]);

    // useEffect(()=>{
    //     // console.log("useEffect called");
    //     async function getData(){
    //         const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
    //         const res = await get.json();

    //         setData(res);
    //         console.log(res);
    //     } 

    //     getData();
    //     document.title = (`(${state}) Employees Online`)
    // },[state])
    //     // console.log("Function called");

    // #React Router-DOM

    // #Contex-API
    // const [data, setData] = useState("Nitish");    
    // const [detail, setDetail] = useState({name:"Kulwant", age:22});


    // #useRef Hook

    // const [input, setInput] = useState("");
    // const count = useRef(0);
    // const prevState = useRef("");


    // Handling DOM property of element:
    // const inputDom = useRef();


    // useEffect(()=>{
    //     console.log("Rendered");
    //     // count.current = count.current +1;
    //     prevState.current = input;
    // },[input]);

    // const formHandler = (e)=>{
    //   setInput(e.target.value);
    // }

    // const ClickHandler =()=>{
    //     // inputDom.current.value="Nitish";
    //     // inputDom.current.focus();
    //     inputDom.current.style.border="2px solid yellow";
    // }


    // # useReducer hook
    // const [state, dispatch] = useReducer(reducer, 0);

        // # React Custom Hook 
        
    // const [data , setData] = useState([]);

    //     useEffect(()=>{
    //         async function getData(){
    //             const get = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
    //             const res = await get.json();
    //             console.log(res);
    //             setData(res);
    //         }
    //         getData();
    //     },[]);

    // // Instead of declaring 170-178 code in multiple component. we can declare it once and use it in multiple components.
    //    const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=40&idStarts=1001");
            
       
       return (
        // <Router>
        <div className="App">

            {/* // Components & import/export */}
            {/* <Header/>
            <h1>Hello World!!! {name}</h1>
            <Footer/> */}
            
            {/* Props Props-type */}
            <Student name="Nitish" age={21}/>
            <Student name="Deepak" age={22}/>
            <Student age={22}/> 

            {/* // Project Movies Website */}
             
           {/* <Header />
            <div className="main">
                {
                    moviesData.map((element , index) => {
                        return (
                            <Movie
                               key ={index}
                                title={element.Title}
                                year={element.Year}
                                image={element.Poster}
                            />
                        )
                    })
                }

            </div>*/}

            {/* // React Hooks
            //useState */}
            {/* <div className="hooks">
            <h1>{num}</h1>
            <button onClick={Inc} >Increment</button>
            <button onClick={Dec} >Decrement</button>
            </div> */}

            {/* Project recording data */}
            {/* <div className="recordcontainer">
                <div className="nav"> 
                
                  <HEADER />
                </div>
                <div className="hero">

                    <Stack direction="row" spacing={2}>

                    <TextField value={name} onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="name" variant="outlined" />
                    <TextField onKeyUp={()=> window.alert("This is up key alert")} onKeyPress={(e)=>handlePress(e)} value={email} onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" />
                    <Button  onClick={addData} variant="contained" color="success"> <AddIcon/>  </Button>
                    </Stack>               
                </div>
                <div className="display">
                    
                    {
                        data.map((element , index) =>{
                            return(
                              <Field name={element.name} email={element.email} index={element.index} data={data} setData={setData} />
                            );
                        })
                    }
                </div>
            </div> */}

            {/* useEffect hook */}
            {/* {console.log("return called")} */}
            {/* <button onClick={()=>{setState(state +2)}} >Click me {state}</button>
            {
                data.map((element,index)=>{
                    return(
                        <div className='data' key={index}>
                            <h4>{index}  {element.firstName} {element.lastName} </h4>
                            
                            <h4>{element.email}</h4>
                        </div>
                    )
                })
            } */}

            {/* React Router-DOM */}
            {/* <Header/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About/>} />

                    <Route path='/contact' element={<Contact/>}>
                            <Route index element={<Insta/>} />   {/*index is use to set default page  in nested routes to display.*/}{/*
                            <Route path='insta' element={<Insta/>} />
                            <Route path='mail'element={<Mail/>} />
                    </Route>
                    <Route path='*' element={<Error/>}/>
                </Routes> */}

            {/* Context Api */}
            {/* <AppState.Provider value={{data, detail}}>
               <NameContext.Provider value={detail} >
                <CompoA />
                </NameContext.Provider>
             </AppState.Provider> */}

            {/* useRef hook */}
            {/* <Header/>
              <input style={{margin:"20px"}} type="text" value={input} onChange={formHandler} ref={inputDom} />
              {/* <h3>Application has been rendered {count.current} times</h3> */}
            {/* <h3>PrevState was  {prevState.current} </h3> */}{/*
                <button onClick={ClickHandler}>Click me</button> */}

            {/* useReducer Hook */}
            {/* <Header />
            <h2>{state}</h2>
            <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button> */}

            {/*  React Custom Hook */}
            {/* <Header/>
            {
                data.map((item,index)=>{
                    return <h1 key={index}>{item.firstName}, {index}</h1>
                })
            } */}

            
        </div>
        // </Router>
    );
}


export default App;
// export {AppState};
// export {NameContext};