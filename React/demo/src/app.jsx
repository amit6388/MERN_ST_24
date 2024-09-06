 
import './app.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import   Home from "./Home.jsx"
export function App() { 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<><h1>hihi</h1></>}/>
    <Route path="/home" element={<Home/>}/>
     <Route path="/contact" element={<h1>contact</h1>}/>
     <Route path='*' element={<h1> Page not found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
