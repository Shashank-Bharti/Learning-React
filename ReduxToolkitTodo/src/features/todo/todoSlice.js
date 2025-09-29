import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: '1',text: 'msg',completed: false}
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
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        markComplete: (state,action) =>{
            state.todos = state.todos.map((todo)=> todo.id === action.payload? {...todo,completed: !todo.completed} : todo)
        }
    }
})

export const {addTodo,removeTodo,markComplete} = todoSlice.actions

export default todoSlice.reducer