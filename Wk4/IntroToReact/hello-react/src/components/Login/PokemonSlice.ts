import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../models/Pokemon";
import { RootState } from "../../shared/Redux/store";

//First what would be the datatype/model this slice should hold?
const initialState:Pokemon = {
    id:0,
    name:"User is not logged in"
}

const pokemonSlice = createSlice({
    name:"pokemon",
    initialState,
    reducers: {
        //The first parameter will be whatever data is currently stored in the store
        setPokemon: (state, action:PayloadAction<Pokemon>) => {
            //In here will be your custom implementation detail on how you want to change the value from the store
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.sprites = action.payload.sprites;
            state.stats = action.payload.stats;
        },
        //This will be invoked if the user logs out
        setDefault: (state) => {

            state.name = "User is not logged in";
            state.id = 0;
            state.sprites = {front_shiny:""};
            state.stats = [];
        }
    }
})

//Exporting each of our reducer so we can use them when we dispatch an action
export const {setPokemon, setDefault} = pokemonSlice.actions;

//Exporting the reducer itself for the store
export default pokemonSlice.reducer;

//Letting all our components to be able to select this pokemon slice
export const selectPokemon = (state:RootState) => state.pokemon;