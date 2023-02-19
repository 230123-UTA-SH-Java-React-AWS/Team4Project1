import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../model/User';
import { RootState } from '../../shared/Redux/store';

const initialState:User = {
    id: 0,
    username: null,
    email: null,
    password: ""
}

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<User>) => {
            state.id = action.payload.id;
            state.fname = action.payload.fname;
            state.lname = action.payload.lname;
            state.address = action.payload.address;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },

        setDefault: (state) => {
            state.id = 0;
            state.username = null;
            state.email = null;
            state.password = "";
        }
    }
})

export const {setUser, setDefault} = UserSlice.actions;

export default UserSlice.reducer;

export const selectUser = (state:RootState) => state.user;