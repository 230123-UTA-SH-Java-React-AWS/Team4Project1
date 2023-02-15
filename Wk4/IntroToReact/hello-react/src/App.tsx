import logo from './logo.svg';
import './App.css';
import PokemonBox from './components/PokemonBox/PokemonBox';
import { Pokemon } from './models/Pokemon';
import Counter from './components/Counter/Counter';
import PokemonList from './components/PokemonList/PokemonList';

/*
  This is what a normal component looks and how we will make ours as well

  The name of the component will the exact name of the function
  It is also very important to export that function so React can utilize it
*/

function App() {

  /*

  */

  let someDiv:number = 25;

  let divElement = <div>This is an element inside of a variable!</div>

  const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";

  let pikachu:Pokemon = {
    name:"Pikachu",
    damage:10,
    health:100,
    img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
    id:1
  }

  let listOfPokemon:Pokemon[] = [
    {
      name:"Pikachu",
      damage:10,
      health:100,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
      id:1
    },
    {
      damage:10,
      health:10,
      id: 2,
      name:"Cyndaquil",
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/155.png"
    },
    {
      damage:20,
      health:300,
      id:20,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/393.png",
      name:"Piplup"
    }
  ]

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and something else.
        </p>

        {/* Everytime you want to reference something from JS to HTLM use {} 
        <p>{someDiv}</p>

        {divElement}

        <img src={imageUrl}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Counter />

      <PokemonBox img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png" name="Bulbasaur" damage={120} health={1000} level={10} />
      <PokemonBox {...pikachu}/>
      
      {
        listOfPokemon.map(pokemon => {
          return <PokemonBox {...pokemon} key={pokemon.name}/>
        })
      } */}

      <PokemonList />

    </div>
  );
}

export default App;
