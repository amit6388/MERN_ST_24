 
import { useState,useEffect } from 'react';
import './App.css' 
function App() {
const [name,setName]=useState("");
  
  function Submit(){
    console.log(name)
  }
  return (
     <> 
 <div className='outer'>
 <input type='text'  onChange={(event)=>setName(event.target.value )}/><br/><br/>
 <input type='button' onClick={Submit} value="Submit"/>
  </div>  
    </>
  )
}





// import './App.css'
//  import Test from './Test'
// function App() {
//   const a=20;
//    const[data,setData]=useState(20);
//   return (
//      <> 
//     <h1>{a} </h1>
//     <Test a={a} />
     

//     </>
//   )
// }

// export default App
