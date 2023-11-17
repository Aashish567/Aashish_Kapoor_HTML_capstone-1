import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Homepage from './components/homepage';
import Navigation from './components/navigation';
import Cart from './components/cart';
import Favorites from './components/favorites';
import Homenew from './components/homenew';


function App() {
  return (
    <div>

    <BrowserRouter>
    
    <Navigation /><br></br><br></br>
    
    <div style={{marginTop:"10px"}}>
    
    <Routes>
      {/* <Route path='/' element={<Homepage />}></Route> */}
      <Route path='/' element={<Homenew />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/favourites' element={<Favorites />}></Route>
    </Routes>

    </div>
    
    </BrowserRouter>

    </div>
  )
}

export default App;

