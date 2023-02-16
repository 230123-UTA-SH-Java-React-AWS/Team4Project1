import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Nav from './component/Nav/Nav';
import Profile from './component/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

