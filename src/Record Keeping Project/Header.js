import "./header.css";
import AdbIcon from '@mui/icons-material/Adb';


const HEADER = () => {
  return (
    <div className="Title">
     <span className="icon"> <AdbIcon/></span>
     <h1 id="label">Recorded Data</h1>      
    </div>
  )
}

export default HEADER;
