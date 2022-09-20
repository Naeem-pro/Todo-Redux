import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer);

  const handleSumit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please enter complete todo item");
      return;
    }
    const newTodo = {
      id: Date.now().toString(),
      title: title,
      description: description,
    };
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      //dispatch an action to delete todo from list
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSumit}>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">
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
          todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <div>{todo.title}</div>
                <div>{todo.description}</div>
                <div>
                  <Link to={`edit/${todo.id}`} className="btn btn-warning me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TodoForm;
