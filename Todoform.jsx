import React, { useState } from 'react'
import { usetodo } from '../Context/TodoContext'

function Todoform() {

    const[todo,settodo]=useState('')
    const {addtodo}=usetodo()
    
    function addvalue(e){
        e.preventDefault()
        if(!todo){
            return
        }
        else{
            addtodo({todo,completed:false})
            settodo("")
        }
            }
  return (
    <form onSubmit={addvalue}>
     <input 
        type='text'
        placeholder='Enter Your Todays tasks'
        value={todo}
        onChange={(e)=>settodo(e.target.value)}
        
     />
     <button type='submit'>Add</button>
    </form>
  )
}

export default Todoform
