
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[inp,setInp]=useState('');

  function handleChange(event){
   if(event.target.value.length<14){

  if(event.target.value.length==1)setInp("("+event.target.value);
    else if(event.target.value.length==4){
      setInp(event.target.value+")");
    }
    else if(event.target.value.length==8){
      setInp(event.target.value+"-");
    }
    else{
      setInp(event.target.value);
    }
  }
  }
  function handleClick(){

    setInp('');
  }


  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={handleChange} value={inp}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default App
