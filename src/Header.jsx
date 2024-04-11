


const Header = () => {
 let Header = "Here is a Header" ;
 const Hstyle = {
  backgroundColor:"#adadad",
  height:"150px",
  border: "2px solid black",
  marginTop: "20px"
 }
  return (
    <div style={Hstyle}>
      <h2>{Header}</h2>
      <p style={{backgroundColor:"burlywood"}} > This is Header Para</p>
    </div>
  )
}

export default Header;
