import Pages from './pages/pages';
import './App.css';


import Jorney from './pages/jorney';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

 


  return (
    <BrowserRouter>
    <Routes >
      <Route path= "/*" element={<Pages/>}/>
      
      
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
