


import{BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from "./Home"
import Login from './mainportal/Login';
import Portal from './mainportal/Portal';


function App() {

  return (
    
         <BrowserRouter>
       <Routes> 
       <Route path="/" element={ <Home />}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/portal" element={<Portal/>}/>      
 
         </Routes>
     
       </BrowserRouter>

     
  )
}

export default App
