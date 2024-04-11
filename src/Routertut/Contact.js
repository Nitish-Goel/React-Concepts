import { Link, Outlet } from "react-router-dom";


const Contact = () => {
  const mystyle = {
    backgroundColor: "green",
    color: "black",
    textStyle: "Arial",
    textAlign: "Center"
  }
  return (
    <div style={mystyle}>
      <h1>Contact Us on abcd@gamil.com</h1>
      <Link to={"/"}>
        <button style={mystyle}>Back to Home</button>
      </Link>

      {/* Nested Routes */}
      <Link to="insta"><h3>Contact via Instagram</h3></Link>
      <Link to={"mail"}><h3>Contact via Mail</h3> </Link>
      <Outlet/>
    </div>
  )
}

export default Contact;
