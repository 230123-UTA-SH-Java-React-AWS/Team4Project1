import { Pokemon } from "../../models/Pokemon";
import PokemonBox from "../PokemonBox/PokemonBox";
import "./PokemonList.css";

function PokemonList() {

    const Pokemon:Pokemon = {
        name:"Pikachu",
        damage:10,
        health:100,
        img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
        level:1
      }

    return <div>
        {/* Pokemon name form */}
        <div className="box">
            <form >
                <label className="form-label">Pokemon Name</label>
                <input className="form-control" type="text"/>
            </form>

            <button className="btn btn-primary" style={{margin:10}}>Submit</button>
        </div>

        <div className="box grid">
            <PokemonBox {...Pokemon}/>
            <PokemonBox {...Pokemon}/>
            <PokemonBox {...Pokemon}/>
            <PokemonBox {...Pokemon}/>
            <PokemonBox {...Pokemon}/>
        </div>
    </div>
}

export default PokemonList;