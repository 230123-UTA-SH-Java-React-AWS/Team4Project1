import { Pokemon } from "../../models/Pokemon";
import "./PokemonBox.css";

/*
    Props should be tied with a model so intellisense/ts compiler will help you out for filling in missing information
*/

interface Pokemonv2 extends Pokemon {
    giveName(name:string):void;
}

function PokemonBox(props: Pokemonv2) {

    return <div className="box">
        <img src={props.sprites?.front_shiny}/>
        <h4>{props.name}</h4>
        <p>Id: {props.id}</p>
        <p>Health: {props.stats?.[0].base_stat}</p>
        <p>Damage: {props.stats?.[1].base_stat}</p>
        <button onClick={() => props.giveName(props.name)}>Give Name</button>
    </div>
}

export default PokemonBox;