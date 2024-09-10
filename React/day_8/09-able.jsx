 
import './App.css'
 import "bootstrap/dist/css/bootstrap.css"
function App() { 
  const arr=[
{
  first:"ram",
  last:"singh",
  handle:"insta"
},
{
  first:"john",
  last:"kumar",
  handle:"linkedIn"
},
{
  first:"Raj",
  last:"Gupta",
  handle:"wtsup"
}

  ]

  return (
     <> 
<table className="table">
  <thead>
    <tr>
      <th scope="col">iNDEX</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
      arr.map((item,index)=>{
  return(<>
  <tr><td>{index+1}</td> <td>{ item.first} </td> <td>{item.last} </td> <td> {item.handle}</td> </tr>
  </>)
      })

    }
    
  </tbody>
</table>

      
    </>
  )
}

export default App
