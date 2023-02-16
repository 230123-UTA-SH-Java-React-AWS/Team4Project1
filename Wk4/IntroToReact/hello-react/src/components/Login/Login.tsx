import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectPokemon, setPokemon } from "./PokemonSlice";
import axios from "axios";
import { Pokemon } from "../../models/Pokemon";

function Login() {
    //We are grabbing the data from the store and will also re-render the page if that data changed
    const pokemon = useAppSelector(selectPokemon);
    const [showLogin, setShowLogin] = useState(false);

    //We have to setup the dispatch by utilizing the hook which will give us a function to actually send a dispatch
    const dispatch = useAppDispatch();

    function Login() {
        if (showLogin) {
            let pokeid = document.querySelector<HTMLInputElement>("#pokeid")?.value;
            
            axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
                .then(response => {

                    //We use the setPokemon reducer to set the data to the store
                    //We passed the response on what we got from the backend
                    dispatch(setPokemon(response.data));
                })
        }else {
            setShowLogin(true);
        }
    }


    if (pokemon.name == "User is not logged in") {
        return <div onClick={() => setShowLogin(true)}>
                {
                    showLogin && <input id="pokeid" type="number" />
                }

                <div onClick={Login} style={{display:"inline"}}>Login</div>
            
            </div>
    }

    return <div>
        Welcome back! {pokemon.name}
    </div>
}

export default Login;