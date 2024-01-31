import React, {useState} from 'react';

function TodoForm() {
    return (
    <form>
      <input type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fa-solid fa-square-plus"></i>
      </button>
    </form>
  );
}

export default TodoForm;
