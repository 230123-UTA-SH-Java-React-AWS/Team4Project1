import { configureStore } from '@reduxjs/toolkit';

import UserSlice from '../../component/Login/UserSlice';

export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;