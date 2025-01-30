
import {useState, useEffect} from 'react';
import {dotenv} from 'dotenv';

function Kulture() {
    const publicKey = import.meta.env.API_KEY;
    const [Api, setApi] = useState([]);
   
   useEffect(() => {
      fetch(`https://loadqa.ndapapi.com/v1/openapi?API_Key=${publicKey}&ind=I9223_4,I9223_5&dim=Country,Year,Month&pageno=1`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setApi(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, [publicKey]);

    return (
    <>
      
    </>
  )
}

export default Kulture