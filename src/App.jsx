import { useEffect, useState } from "react";
import "/public/App.css";
import Todo from "./components/todo";
import AddTodo from "./components/addTodo";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "estudar",
      completed: false,
    },
    {
      id: 2,
      title: "lavar a louça",
      completed: true,
    },
  ]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input != "") {
      setData([
        ...data,
        {
          id: uuidv4(),
          title: input,
          completed: false,
        },
      ]);
    }
  };
  const handleInput = (e) => setInput(e.target.value);
  const handleRemoveTodo = (id) => {
    setData(data.filter((d) => d.id != id));
  };
  const handleCompleteTodo = (id) => {
    const newTodo = data.map((t) => {
      if (t.id === id) return { ...t, completed: !t.completed };

      return t;
    });

    console.log(newTodo);
    setData(newTodo);
  };

  return (
    <div className="app">
      <header>
        <h2>todo App</h2>
      </header>

      <div className="container">
        <div className="add">
          <AddTodo
            inputValue={input}
            handleAdd={handleAdd}
            handleInput={handleInput}
          />
        </div>

        <div className="todos">
          {data.map((e, k) => {
            return (
              <Todo
                props={e}
                handleRemoveTodo={handleRemoveTodo}
                handleCompleteTodo={handleCompleteTodo}
                key={e.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
