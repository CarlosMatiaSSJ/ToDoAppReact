import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  {text: "Cortar cebolla", completed: false},
  {text: "pelar cebolla", completed: false},
  {text: "cocer cebolla", completed: true},
  {text: "comprar cebolla", completed: false}
]

function App() {
  return (
    
      <>
        <TodoCounter completed={16} total={25} />
        <TodoSearch />


        <TodoList>
          {defaultTodos.map( todo => (
            <TodoItem key={todo.text} 
            text={todo.text}
            completed = {todo.completed}/>
          ))}
        </TodoList>

        <CreateTodoButton />
      </>
      
    
  );
}


export default App;
