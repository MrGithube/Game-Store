import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';

import { AuthProvider } from './contexts/authContext';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/login/login';
import Logout from './components/logout/logout';
import Register from './components/register/register';
import GameCreate from './components/game-create/game-create';
import GameList from './components/listed-games/listedGames';
import GameDetails from './components/game-details/gameDetails';

const App = () => {
  const location = useLocation();

 
  const hideHeader = location.pathname === "/login" || location.pathname === "/register"  

  return (
    <AuthProvider>
      <div>
      
        {!hideHeader && <Header />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-game" element={<GameCreate />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/game-details/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
