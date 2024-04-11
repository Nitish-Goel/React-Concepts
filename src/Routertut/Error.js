import {useNavigate} from 'react-router-dom';

const Error = () => {
    const mystyle  ={
        height:"25%",
        width:"25%",
        marginLeft:"20%",
        marginTop:"25%",
        backgroundColor:"green",
        color:"black",
        textStyle:"Arial",
        textAlign:"Center"
    }

    const navigate = useNavigate();
  return (
    <div style={mystyle}>
      <h1>404 page no Found</h1>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Error;
