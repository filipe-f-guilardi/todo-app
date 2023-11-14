import "/public/todo.css";

const Todo = ({ handleRemoveTodo, handleCompleteTodo, props }) => {
  return (
    <div className={`todo ${props.completed == true ? "completed" : ""}`}>
      <p onClick={() => handleCompleteTodo(props.id)}>{props.title}</p>
      <button onClick={() => handleRemoveTodo(props.id)}>X</button>
    </div>
  );
};

export default Todo;
