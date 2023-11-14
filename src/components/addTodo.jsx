import "/public/addTodo.css";

const AddTodo = ({ inputValue, handleInput, handleAdd, ...props }) => {
  return (
    <div className="add-todo">
      <input type="text" value={inputValue} onChange={(e) => handleInput(e)} />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default AddTodo;
