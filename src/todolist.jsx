import { useState } from "react";

const TodoApp = () => {
  // Define state for todo title
  const [todoTitle, setTodoTitle] = useState("");

  // Define state for Todos
  const [todos, setTodos] = useState([]);

  // Method to add todo into list
  const handleAddTodo = () => {
    if (!todoTitle) {
      return alert("Please enter a todo title");
    }

    // Update the todo
    setTodos((lastState) => [...lastState, todoTitle]);
    setTodoTitle("");

    // Second way -> it may create stale closure issue with async to multi state
    //setTodos([...todos, todoTitle]);
  };
  const onDeleteTodo = (id) => {
    console.log(id, "check id");
    setList((prevList) => {
      const Printresult = prevList.filter((item, index) => index !== id);
      console.log(Printresult, "result");
      return Printresult;
    });
  };


  // Define return for JSX
  return (
    <>
      <div>
        <input
          value={todoTitle}
          type="text"
          placeholder="Enter todo title"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div>
        <h1>My Todos</h1>
        <ul>
          {todos.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <span>
        {list.map((data, index) => {
          return (
            <div key={index}>
              {data} <button onClick={() => onDeleteTodo(index)}>delete</button>
            </div>
          );
        })}
      </span>
      </div>
    </>
  );
};

export default TodoApp;
