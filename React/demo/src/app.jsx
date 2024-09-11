 

import React,{useEffect} from 'preact/compat';
import './app.css' 
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
      },[])
  return (
    <div className="outer-div">

      <div data-aos="fade-left" className="inner-div">
        <h1 className="header">Div 1</h1>
      </div>

      <div  data-aos="fade-up-right" className="inner-div">
        <h1 className="header">Div 2</h1>
      </div>

      <div  data-aos="flip-right" className="inner-div">
        <h1 className="header">Div 3</h1>
      </div>

      <div data-aos="zoom-out-up" className="inner-div">
        <h1 className="header">Div 4</h1>
      </div>
    </div>
  );
}

export default App;
