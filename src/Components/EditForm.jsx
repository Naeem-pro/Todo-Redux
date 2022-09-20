import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
const EditForm = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todoReducer);
  const todo = todos.find((item) => item.id == id);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      id: id,
      title: title,
      description: description,
    };
    dispatch({
      type: "UPDATE_TODO",
      payload: updatedTodo,
    });
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleEdit}>
        <div className="row mb-3">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={title}
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
              value={description}
              className="form-control"
              id="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-50">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditForm;
