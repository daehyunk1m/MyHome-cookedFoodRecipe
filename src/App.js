import React from 'react';
import { Route, Routes } from 'react-router-dom';

import List from './pages/list';
import Form from './pages/form'
import Detail from './pages/detail';
import Login from './pages/login';
import Signup from './pages/signup';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/api/postlist' element={<List/>} />
        <Route path='/api/postlist/create' element={<Form/>} />
        <Route path='/api/postlist:postId' element={<Detail/>} />
        <Route path='/auth/login' element={<Login/>} />
        <Route path='/auth/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default App;
