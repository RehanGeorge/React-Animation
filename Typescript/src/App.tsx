import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([new Todo('Learn React'), new Todo('Learn Typescript')]);


  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    }
    );
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    })
  }

  return (
    <>
      <div>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos} deleteHandler={deleteTodoHandler} />
      </div>
    </>
  )
}

export default App
