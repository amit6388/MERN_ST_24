import React, { useState } from 'react'

function Add() {
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [brand,setBrand]=useState('')
    const [category,setCategory]=useState('')
    const [imge,setImg]=useState('')
    const [vol,setVol]=useState('')
    function addPro(){
        let data={name,price,brand,category,imge,vol}
        console.log(data)
        setName("")
        setPrice("")
        setBrand("")
        setCategory("")
        setImg("")
        setVol("")
        fetch('http://localhost:9999/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {

    })
    }
    
  return (
    <div>
    <div className="container">
        <div className="row">
            <h1 style={{color:"#21bbf7",textAlign:"center"}}>Admin Dashboard</h1>
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                
            
                 <input type="text" required className='form-control'
                  value={name} onChange={(event) => {
                    setName(event.target.value)
                  }}
                  placeholder='Enter Product Name' /> <br/>
             <input type="number" required className='form-control'
                  value={price} onChange={(event) => {
                    setPrice(event.target.value)
                  }}
                  placeholder='Enter Product Price' /> <br/>
                  <input type="text" required className='form-control'
                  value={brand} onChange={(event) => {
                    setBrand(event.target.value)
                  }}
                  placeholder='Enter Product Brand' /> <br/>
                   <input type="text" required className='form-control'
                  value={category} onChange={(event) => {
                    setCategory(event.target.value)
                  }}
                  placeholder='Enter Product Category' /> <br/>
                  <input type="text" required className='form-control'
                  value={imge} onChange={(event) => {
                    setImg(event.target.value)
                  }}
                  placeholder='Enter Product Image' /> <br/>
                  <input type="number" required className='form-control'
                  value={vol} onChange={(event) => {
                    setVol(event.target.value)
                  }}
                  placeholder='Enter Product Volume' /><br /> 
              
                <button className='btn btn-outline-success form-control' onClick={addPro} >Submit</button>

               


            </div>
            <div className="col-sm-3"></div>
        </div>
    </div>
    </div>
  )
}

export default Add
