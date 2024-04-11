import './App.css';

// function App() {
//     let a = 20;
//     return (
//         // <>  {/*work like div*/}
//         <div className="hero">
//             <h1 style={{backgroundColor:"greenyellow",color:""}}>Hello World!!!</h1>
//             <p>a</p>
//             <p>{a + 5}</p>
//         </div>
//         // </>
//     )
// }

const App =()=>{
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

const Hello =()=>{
    return(
        <>
        <h1>React</h1>
        </>
    )
}
const Greet =()=>{
    return(
        <>
        
        <h1>React is Awesome</h1>
        </>
    )
}
export default App;
export{Hello,Greet as Byy}
export const value ="Hey, there!"; 