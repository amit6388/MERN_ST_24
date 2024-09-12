import React ,{useEffect} from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Comman(props) {
  useEffect(()=>{
AOS.init({
  duration:3000,
})
  },[])
  return (
    <React.Fragment>
     <div className="container">
       <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
        <div className="row">
            <div data-aos="fade-right" className="col-sm-6 pt-5"><br /><br /> 
          <h1 style={{color:"#21bbf7"}}>{props.h1}</h1>
          <br /><h4 style={{color:"gray"}}>{props.h4}</h4>
<br />
<span className='btn btn-primary'>Get Started &rarr;</span> <span className='btn btn-outline-primary'>Learn more</span>
            </div>


            <div  className="col-sm-6 pt-5 banner" ><img src={props.img}  data-aos="zoom-in-up" className='img-responsive' height="400px"  alt='not mtch'/></div>
        </div>
        </div>
        <div className="col-sm-1"></div>
       </div>
        </div> 
    </React.Fragment>
  )
}
