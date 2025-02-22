
// App.js
// import React, { useState } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Reporting from './components/Reporting';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ChatPage from './components/ChatPage';

const App = () => {
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/chatpage" element={<ChatPage />} />
        
      </Routes>
      <Footer />
    </div>
  );
};



export default App;
