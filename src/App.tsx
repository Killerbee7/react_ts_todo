import React, {useState} from 'react';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './todomodal';

import './App.css';


const App: React.FC = () => {

  const [todos, setTodos]= useState<Todo[]>([]);

  

  const todoSubmitHandler = (text:string) => {
    console.log(text)
    setTodos((prevTodos) => [
      ...prevTodos,
      {id: Math.random().toString(), text:text},
    ])
  }
  

  return (
    <div className="App">
     <h1>DING DONG</h1>
     <NewTodo onAddTodo={todoSubmitHandler}/>
     <TodoList items= {todos} />    
     </div>
  );
}

export default App;
