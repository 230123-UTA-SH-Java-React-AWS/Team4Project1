import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonBox from './components/PokemonBox/PokemonBox';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and something else.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <PokemonBox />
      {/* <PokemonBox /> */}
      {/* <PokemonBox /> */}
    </div>
  );
}

export default App;
