import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import EditForm from "./Components/EditForm";

function App() {
  let dispatch = useDispatch(); //dipatch hook is used to dispatch an action through ui
  const counter = useSelector((state) => state.counterReducer); //useSelector hook is used to get value from store
  const [num, setNum] = useState(0);
  const handleDeposit = () => {
    if (!num) {
      alert("Please enter a number");
    } else {
      dispatch({ type: "DEPOSIT", payload: Number(num) });
    }
  };
  const handleWithdraw = () => {
    if (!num) {
      alert("Please enter a number");
    } else {
      dispatch({ type: "WITHDRAW", payload: Number(num) });
    }
  };
  return (
    <div className="App">
      {/* <h4>Counter example in redux</h4>
      <input type="text" onChange={(e) => setNum(e.target.value)} value={num} />
      <button onClick={handleDeposit}>Deposit</button>
      <span>{counter}</span>
      <button onClick={handleWithdraw}>Withdraw</button> */}
      <Routes>
        <Route path="edit/:id" element={<EditForm />} />
        <Route path="/" element={<TodoForm />} />
      </Routes>
    </div>
  );
}

export default App;
