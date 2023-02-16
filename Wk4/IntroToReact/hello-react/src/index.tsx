import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import NavBar from './components/NavBar/NavBar';
import { Provider } from 'react-redux';
import { store } from './shared/Redux/store';


/*
  Index.tsx is the main entry point of your website
  Anything here is what will be displayed

  Since React is SPA, this is going to the main HTML page
*/

//React selects the div with an id of root in index.html
//And it will display your components there
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* BrowserRouter starts the routing, this is what will switch between components */}
      <BrowserRouter>
        <NavBar />

          {/* Routes will hold many Route components that has its own path and component to display */}
          <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/pokeList" element={<PokemonList />}/>
          </Routes>
        <div>Footer</div>
      </BrowserRouter>
      
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
