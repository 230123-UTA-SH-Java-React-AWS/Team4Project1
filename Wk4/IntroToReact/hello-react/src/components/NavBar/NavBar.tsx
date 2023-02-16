import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import Login from "../Login/Login";
import { selectPokemon, setDefault } from "../Login/PokemonSlice";
import "./NavBar.css";

function NavBar() {
    const dispatch = useAppDispatch();

    const pokemon = useAppSelector(selectPokemon);

    return <div className="flex">
        <Link to="/">Home</Link>
        <Link to="/pokeList">Pokemon List</Link>

        {
            pokemon.name != "User is not logged in"&&<div onClick={() => {dispatch(setDefault())}}>Logout</div>

        }
        <Login/>
    </div>
}

export default NavBar;
