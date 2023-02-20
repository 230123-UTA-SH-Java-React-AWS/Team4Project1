import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './component/Login/Login';
import Profile from './component/Profile/Profile';
import { Provider } from 'react-redux';
import { store } from './shared/Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer/Footer';
import NewAccount from './component/NewAccount/NewAccount';
import Accounts from './component/Accounts/Accounts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/accounts' element={<Accounts />} />
          <Route path='/accounts/new-account' element={<NewAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

