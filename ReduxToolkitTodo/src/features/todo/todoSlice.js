import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: '1',text: 'msg',completed: false ,editTodo: false}
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                editTodo: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        markComplete: (state,action) =>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload? {...todo,completed: !todo.completed} : todo)
        },
        editTodo: (state,action)=>{
            // toggle edit mode for a single todo
            state.todos = state.todos.map((todo)=> todo.id === action.payload? {...todo,editTodo: !todo.editTodo} : todo)
        },
        updateTodo: (state, action) => {
            // payload: { id, text }
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, text, editTodo: false } : todo
            );
        }
    }
})

export const {addTodo,removeTodo,markComplete,editTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer