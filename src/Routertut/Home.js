import { Link, NavLink } from "react-router-dom"

const Home = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "green" : "red",
      fontSize:"250px"
    };
  };

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    margin: "20px",
  }
  return (
    <><div style={mystyle}>
      
      <p >This is Home Page</p>
    <NavLink style={navLinkStyles} to={"/About"}> 
     <button >About Us</button>
     </NavLink>
     <Link to={"/Contact"}>
      <button style={mystyle}>Contact Us</button>
      </Link>
    </div>
    </>
  )
}

export default Home
