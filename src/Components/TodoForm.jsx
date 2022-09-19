import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer);
  console.log(todos);

  const handleSumit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSumit}>
        <div className="row mb-3">
          <label htmlFor="title" class="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-50">
          Save
        </button>
      </form>
      <ul className="list-group mt-4">
        {todos.length === 0 ? (
          <li className="list-group-item bg-danger">No Todos</li>
        ) : (
          <li className="list-group-item bg-success">All Todos</li>
        )}
        {todos &&
          todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <span style={{ fontWeight: "bold" }}>{todo.title}</span>{" "}
              {todo.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoForm;
