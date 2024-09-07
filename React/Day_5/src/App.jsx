 
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import Menu from './Menu';
function App() { 

  return (
     <>
    <BrowserRouter>
    <Menu/>
    <br/>
    <Routes>
<Route path="/" element={<>this is home</>}/>
<Route path='/about' element={<>this is about</>} />
<Route path='/contact' element={<>this is contact</>} />
<Route  path='*' element={<h1>Page not found.....</h1>}/>
    </Routes>
    
    </BrowserRouter> 
    </>
  )
}

export default App
