import { Pokemon } from "../../models/Pokemon";
import "./PokemonBox.css";

/*
    Props should be tied with a model so intellisense/ts compiler will help you out for filling in missing information
*/

function PokemonBox(props: Pokemon) {

    return <div className="box">
        <img src={props.sprites?.front_shiny}/>
        <h4>{props.name}</h4>
        <p>Id: {props.id}</p>
        <p>Health: {props.stats?.[0].base_stat}</p>
        <p>Damage: {props.stats?.[1].base_stat}</p>
    </div>
}

export default PokemonBox;