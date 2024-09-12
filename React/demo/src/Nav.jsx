import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <React.Fragment>
     <div className="container">
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
  <span className="navbar-brand" style={{color:'#21bbf7'}}><h2 style={{fontWeight:"bold"}}>Technical Hunt</h2>  </span>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{float:"right"}}>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link"  to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to="/service">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to="/addproduct">AddProduct</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to="/showproduct">ShowProduct</Link>
      </li>
    </ul>
    
  </div>
</div>
</nav>
            </div>
            <div className="col-sm-1"></div>
        </div>
     </div>
    </React.Fragment>
  )
}
