
import { Routes,Route, useNavigate,} from 'react-router-dom';
// import { useState } from 'react';  
import React from 'react';


import Header from './components/header/header';
import Home from './components/home/home';
import Catalog from './components/catalog/catalog';
const App = () => {


  return (
  
    
        <AuthContext.Provider value={values}> 
        <div>
          
         <Header/>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/games" element={<Games />} />
            <Route path="/games/:gameId" element={<GameDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
    
          </Routes>
        
        
        </div>
        </AuthContext.Provider>
  );
};

export default App;
