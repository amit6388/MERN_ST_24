 
import { useState } from 'react';
import './App.css'
 import Test from './Test'
function App() {
  // const a=20;
   const[data,setData]=useState(0);

   function demo(){
       setData(data+1);
   }

   function sub(){
    setData(data-1);
}
  return (
     <> 
    <h1>{data} </h1>
   <div onClick={demo} >add</div><br/>
   <div onClick={sub} >sub</div>
    </>
  )
}

export default App
 



//  ]

// import { useState } from 'react';
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
