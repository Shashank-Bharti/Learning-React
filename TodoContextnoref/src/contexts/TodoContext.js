import {useContext , createContext} from 'react'

export const TodoContext = createContext(
    {
        todos:[{
            id:1,
            todo:'msg',
            completed:false,

        }],
        addTodo:(todo)=>{},
        deleteTodo:(id)=>{},
        updateTodo:(id,todo)=>{},
        toggleCompleted:(id)=>{},
        

    }
)