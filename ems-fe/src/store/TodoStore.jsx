import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//////////////// USING CREATE STORE /////////////////////////////
// const initialState = {
//     items: []
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_ITEM':
//             return {
//                 ...state,
//                 items: [...state.items, action.payload]
//             };
//         default:
//             return state;
//     }
// }

// export const TodoStore = createStore(reducer);

const todoSlice = createSlice({
    name: 'todos',
    initialState: { items: [] },
    reducers: {
        addItem: (state, action) => {
            state.items.push({ ...action.payload, id: Math.random() });
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload);
        },
    }
})

export const { addItem, removeItem } = todoSlice.actions;

export const TodoStore = configureStore({
    reducer: todoSlice.reducer
});

