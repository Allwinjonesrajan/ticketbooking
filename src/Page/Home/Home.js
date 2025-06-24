import React, { useEffect, useState } from 'react'
import Customcard from '../../Components/Customcard';
import Categorys from '../../Components/Categorys/Categorys';


const Home = () => {
    const [output,setOutput]=useState([]);
    useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then(response => response.json())
      .then((data) => setOutput(data))
      .catch(error => console.error('fetch error:', error));
  }, []);
  

  return (
    <>
    <div className='container'>
      
    
     <div className='row'>
  {output.map((item,index)=>(
    <div className='col-lg-4'>
    <div key ={item.index}>

    <Customcard 
    item={item}
  
    />

</div>
</div>
))}
</div>
</div>
    </>
  )
}

export default Home
