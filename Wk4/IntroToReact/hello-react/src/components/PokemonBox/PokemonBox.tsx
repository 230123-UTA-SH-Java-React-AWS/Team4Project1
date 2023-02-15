import { Pokemon } from "../../models/Pokemon";
import "./PokemonBox.css";

/*
    Props should be tied with a model so intellisense/ts compiler will help you out for filling in missing information
*/

function PokemonBox(props: Pokemon) {

    return <div className="box">
        <img src={props.img}/>
        <h4>{props.name}</h4>
        <p>Level: {props.level}</p>
        <p>Health: {props.health}</p>
        <p>Damage: {props.damage}</p>
    </div>
}

export default PokemonBox;