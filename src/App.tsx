import './App.css';
import axios from 'axios';
import {useState} from "react";
import { Todo } from './Todo';

function App() {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) =>{
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得ハゲタコ</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid}/>
      ))}
    </div>
  );
}
export default App;
