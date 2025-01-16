import React from "react";
import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:'hello',
            completed:false
        }
    ],
    addtodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    updatetodo:(id,todo)=>{},
    togglecomplete:(id)=>{}
})
export const usetodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider=TodoContext.Provider
