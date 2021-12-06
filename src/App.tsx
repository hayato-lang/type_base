import './App.css';
import axios from 'axios';
import {useState} from "react";
import { Todo } from './Todo';

type TodoType = {
  userId: number;
  id: number;
  title: number;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
    .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
    .then((res) =>{
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得ハゲタコ</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId}/>
      ))}
    </div>
  );
}
export default App;
