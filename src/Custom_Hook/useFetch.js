import { useState,useEffect } from "react";


const useFetch = (url) => {
    const [data , setData] = useState([]);

        useEffect(()=>{
            async function getData(){
                const get = await fetch(url);
                const res = await get.json();
    
                setData(res);
            }
            getData();
        },[]);
  return [data];
}

export default useFetch;
