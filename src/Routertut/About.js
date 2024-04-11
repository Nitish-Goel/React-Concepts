import { Link } from "react-router-dom";

const About = () => {
    const mystyle = {
        color:"#ff9f1c",
        backgroundColor:"#588157",
        marginTop:"40px",
        marginLeft:"40px",
        textAlign:"center",
        fontSize:"15px",
        border:"2px solid #0077b6"
    }
  return (

    <div style={mystyle}>
        <p>This is about us page </p>
     <Link to={"/"}>
      <button style={mystyle}>Back to Home</button>
      </Link>
    </div>
  )
}

export default About;
