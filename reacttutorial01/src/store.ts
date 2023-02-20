import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        
    }
})

/*
    React Redux doesn't fully support TS, we need some extra configuration so we can have our intellisense back
*/
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;