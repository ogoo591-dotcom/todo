"use client";

import { useState } from "react";
import "./index.css";

export default function Home() {
  const [state, setState] = useState("");
  const [todos, SetTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChangeAllButton = () => {
    setState("All");
  };

  const handleChangeActiveButton = () => {
    setState("Active");
  };

  const handleChangeCompletedButton = () => {
    setState("Completed");
  };
  const handleInputValue = (event) => {
    setInputValue([event.target.value]);
  };
  const handleAddButton = () => {
    SetTodos([...todos, inputValue]);
    setInputValue("");
  };
  console.log("this is state value", state);
  console.log("this is inputy value", inputValue);
  console.log("this is todos now", todos);

  return (
    <div className="bdy">
      <div className="box">
        <div className="container">
          {" "}
          <h1 className="title">To-Do list</h1>
          <div className="text">
            {" "}
            <input
              onChange={handleInputValue}
              className="input"
              value={inputValue}
              placeholder="  Add a new task..."
            ></input>
            <button onClick={handleAddButton} className="btn">
              Add
            </button>
          </div>
          <div className="angilal">
            <button
              onClick={handleChangeAllButton}
              style={{
                backgroundColor: state === "All" ? " #3c82f6" : " #f3f4f6",
              }}
              className="all ugs"
            >
              All
            </button>
            <button
              onClick={handleChangeActiveButton}
              style={{
                backgroundColor: state === "Active" ? " #3c82f6" : " #f3f4f6",
              }}
              className="active ugs"
            >
              Active
            </button>
            <button
              onClick={handleChangeCompletedButton}
              style={{
                backgroundColor:
                  state === "Completed" ? " #3c82f6" : " #f3f4f6",
              }}
              className="comp ugs"
            >
              Completed
            </button>
          </div>
          <div className="anhaar">No tasks yet. Add one above!</div>
          <div className="taskNew">
            <input className="taskCheck" type="checkbox" />
            <p className="taskText">Create PR</p>
            <button className="taskDelete">Delete</button>
          </div>
          <div className="taskNew">
            <input className="taskCheck" type="checkbox" />
            <p className="taskText">Create PR 2</p>
            <button className="taskDelete">Delete</button>
          </div>
        </div>
        <div className="footer">
          <span>Powered by</span>
          <span className="pinecone">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
