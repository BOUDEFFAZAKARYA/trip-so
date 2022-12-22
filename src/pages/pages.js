


import Jorney from './jorney';
import Types from './typesTransport';
import { BrowserRouter, Route ,Routes } from "react-router-dom";



function Pages() {

 


  return (





<div  class=" snap-y  snap-mandatory h-screen w-screen overflow-scroll bg-gradient-to-b from-green-200 to-green-500 ">

  <Routes>


  <Route class="snap-start" path= "/*" element={<Jorney/>}/>

  <Route  class="snap-start" path= "/types" element={<Types/>}/>



 

  </Routes>

    </div>

  );

}

export  default Pages ;