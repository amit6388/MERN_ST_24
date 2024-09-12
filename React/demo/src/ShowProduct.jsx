import React ,{useState,useEffect} from 'react'
import Barcode from 'react-barcode';
function ShowProduct() {
    const [users,setUsers]=useState([]);
  
    const getUsers=()=>{
       fetch(' http://localhost:9999/users').then((res)=>{
    res.json().then((resp)=>{
       setUsers(resp)
          }) })
      
    }
    
    useEffect(()=>{
      getUsers()
    },[])


  return (
    <div>
 <div className="container-fluid">
 <h1 style={{color:"#21bbf7",textAlign:"center"}}>Products</h1>
    <div className="row">
        
        <div className="col-sm-12">
        
        <table className='table table-dark'>
        <thead>
          <tr>
            <th> Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th> Category</th>
            <th> Quantity</th>
            <th>Image</th>
            <th>Barcode</th>
           
          </tr>
        </thead>
        <tbody  className='table table-hover'>
        {users.map((el,index)=>{
        return(<>
        <tr>
          <td>{el.name}</td>
          <td>{el.price}</td>
          <td>{el.brand}</td>
          <td>{el.category}</td> 
          <td>{el.vol}</td> 
          <td><img src="{el.imge}" alt='error'/></td> 
         <td> <Barcode  value={`${el.name}  ${el.price}  ${el.brand}  ${el.category}  ${el.vol}`} /></td>
        </tr>
        </>)
      })
      
      
      }
        </tbody>
      </table>
        </div>
      
    </div>
 </div>
    </div>
  )
}

export default ShowProduct
