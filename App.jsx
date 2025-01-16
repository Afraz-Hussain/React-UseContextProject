import React, { useEffect, useState } from 'react'
import {TodoProvider} from './Context/TodoContext'
import Todoform from './Components/Todoform'
import Todolist from './Components/Todolist'
import './App.css'
function App() {
  const [todos,settodos]=useState([])
  function addtodo(todo) {
    settodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }
  
  function deletetodo(id){
    settodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id!==id)))
    }
    function updatetodo(id,todo){
      settodos((prev) => prev.map(( prevtodo)=>prevtodo.id===id ?todo:prevtodo))
    }
    function togglecomplete(id){
      settodos((prev) =>prev.map((prevtodo)=>prevtodo.id===id? 
      {...prevtodo,completed:!prevtodo.completed}:prevtodo))
    }
  useEffect(()=>{
    const todos=JSON.parse( localStorage.getItem("todos"))||[]
    if(todos.length>0){
      settodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{addtodo,deletetodo,updatetodo,togglecomplete}}>
<h1>Manage Your All Tasks.</h1>
<Todoform/>

{
  todos.map((prevtodomsg)=>(
    <div key={prevtodomsg.id}><Todolist prevtodomsg={prevtodomsg}/></div>
  ))
}
    </TodoProvider>
  )
}

export default App
