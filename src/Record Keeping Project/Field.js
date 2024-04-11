import DeleteIcon from '@mui/icons-material/Delete';


const Field = ({name , email, index, data, setData }) => {
    // const removeItem = (index)=>{
    const removeItem = ()=>{
           let arr = data;
           arr.splice(index,1);
            setData([...arr]);
        };
  return (
    // <div key= {index} className="data__val">
    <div className="data__val">
    <h4>{name}</h4>
    <h4>{email}</h4>
    {/* <button onClick={()=> removeItem(index)} ><DeleteIcon/> */}
    <button onClick={ removeItem} ><DeleteIcon/>
    </button>
</div>
  )
}

export default Field;
