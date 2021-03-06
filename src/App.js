import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const _todo = (
        await axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
      ).data;
      setTodo(_todo.title);
    };

    fetch();
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <h2 data-testid="title">Title: {todo}</h2>
    </div>
  );
}

export default App;
