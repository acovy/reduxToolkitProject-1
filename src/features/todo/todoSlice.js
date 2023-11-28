import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        toggleCompleatedTodo: (state, action) => {
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
            toggleTodo.compleated = !toggleTodo.compleated;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) // новый массив где мы ищем элемент туду 
        }
    }
})

export const {addTodo, toggleCompleatedTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;