import { configureStore } from "@reduxjs/toolkit";
import PokemonSlice from "../../components/Login/PokemonSlice";

export const store = configureStore({
    reducer: {
        pokemon: PokemonSlice
    }
})

/*
    React Redux doesn't fully support TS, we need some extra configuration so we can have our intellisense back
*/
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;