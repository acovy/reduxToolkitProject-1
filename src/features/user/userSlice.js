// Slice - та часть ReduxToolkit'a которая отвечает за
// инициализацию State в наш Store и за все функции связанные с этим State

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName:'',
    lastName: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload; // action.payload - те данные которые мы передаем на клиентской части 
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        }    
    },
})

export const {setFirstName, setLastName} = userSlice.actions;
export default userSlice.reducer;