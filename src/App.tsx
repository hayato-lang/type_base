import './App.css';
import axios from 'axios';
import {useState} from "react";
import { Todo } from './Todo';
import { TodoType } from './types/TodoType';
import { Text } from "./Text";
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
  name: "はやと",
  hobbies: ["麻雀", "サッカー"]
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
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得ハゲタコ</button>
      {todos.map((todo) => (
        <Todo 
        key={todo.id}
        title={todo.title} 
        userId={todo.userId} 
        completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
