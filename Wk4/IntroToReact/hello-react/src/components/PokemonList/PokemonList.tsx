import { createContext, useContext, useState } from "react";
import { Pokemon } from "../../models/Pokemon";
import PokemonBox from "../PokemonBox/PokemonBox";
import "./PokemonList.css";
import axios from "axios";

/*
    useContext() hook will help supply any child components with a value setup from the parent component
*/

export const textTheme = createContext("");

function PokemonList() {

    const Pokemon:Pokemon = {
        name:"Pikachu",
        damage:10,
        health:100,
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
        id:1
    }

    const [listOfPoke, setListOfPoke] = useState<Pokemon[]>([]);

    const [count, setCounter] = useState(0);

    function submitPokemon(){
        let pokename = document.querySelector<HTMLInputElement>("#pokename")?.value;

        //NPM install react-axios

        //Axios has multiple methods
        axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
            .then(response => {
                console.log(response.data);

                setListOfPoke([response.data,...listOfPoke]);
            })
    }

    //Create a function in the parent component and the parameters will dictate the information you want from your child component
    function getPokeName(childData:string) {
        console.log(childData);
    }

    return <div>
        <textTheme.Provider value="red"> 
            {/* Pokemon name form */}
            <div className="box">
                <form >
                    <label className="form-label">Pokemon Name</label>
                    <input id="pokename" className="form-control" type="text"/>
                </form>

                <button className="btn btn-primary" style={{margin:10}} onClick={submitPokemon}>Submit</button>
            </div>

            <div className="box grid">
                {
                    listOfPoke.map(pokemon => {
                        return <PokemonBox {...pokemon} key={pokemon.name} giveName={getPokeName} counter={count} increment={() => {setCounter(count+1)}}/>
                    })
                }
            </div>
        </textTheme.Provider>
    </div>
}

export default PokemonList;