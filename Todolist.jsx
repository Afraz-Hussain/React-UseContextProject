import React, { useState } from 'react';
import { usetodo } from '../Context/TodoContext';

function Todolist({ prevtodomsg }) {
const { togglecomplete, updatetodo, deletetodo } = usetodo();

const [iseditable, setiseditable] = useState(false);
  
const [todomsg, settodomsg] = useState(prevtodomsg.todo || '');

  function edit() {
    updatetodo(prevtodomsg.id, { ...prevtodomsg, todo: todomsg });
    setiseditable(false);
  }

  function togglecompleted() {
    togglecomplete(prevtodomsg.id);
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={prevtodomsg.completed}
        onChange={togglecompleted}
      />

      <input
        type="text"
        value={todomsg}
        onChange={(e) => settodomsg(e.target.value)}
        disabled={!iseditable}
      />

      <button onClick={() => deletetodo(prevtodomsg.id)}>🗑️</button>

      <button
        onClick={() => {
          if (!prevtodomsg.completed && iseditable) {
            edit();
          } else if (!prevtodomsg.completed) {
            setiseditable((prev) => !prev);
          }
        }}
        disabled={prevtodomsg.completed}
      >
        {iseditable ? ' ✏️' : '📁'}
      </button>
    </div>
  );
}

export default Todolist;
