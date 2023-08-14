import React from 'react';

const Todo = ( {todo, removeTodo, completTodo}  ) => {
  return (
    <div className="todo" 
    style={{textDecoration: todo.isCompleted ? "line-through" : "",
            color: todo.isCompleted ? 'white' : '',
            backgroundColor: todo.isCompleted ? '#5cb85c' : ''
           }
            }>
            <div className="content">
              <p>{todo.text}</p>
              <p>{todo.category}</p>
            </div>
            <div>
              <button className='complete' onClick={() => completTodo(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          </div>
  )
}

export default Todo