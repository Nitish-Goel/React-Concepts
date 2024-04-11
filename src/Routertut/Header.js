import { NavLink } from "react-router-dom";

const Header = () => {
    
    const navLinkstyle = ({isActive})=>{
        return{
            textDecorarion: isActive? "underline":"none",
            color: isActive ? "purple" : "black",
            fontSize: "25px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"spaceBetween"
        };
    };
    const style = {
        height:"80px",
        border: "1px solid black",
        backgroundColor:"#ababab",
        padding:"5px",
        textAlign:"center"
    }
  return (
    <div style={style}>
      <NavLink style={navLinkstyle} to={'/'}>Home</NavLink>
      <NavLink style={navLinkstyle} to={'/contact'}>Contact</NavLink>
      <NavLink style={navLinkstyle} to={'/about'}>About</NavLink>
    </div>
  )
}

export default Header;
