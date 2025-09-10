// "use client";

// import { useState } from "react";
// import "./index.css";
// import ShortUniqueId from "short-unique-id";
// import { KeyObject } from "crypto";

// export default function Home() {
//   const [state, setState] = useState("");
//   const [todos, SetTodos] = useState([]);
//   const uid = new ShortUniqueId();

//   const [inputValue, setInputValue] = useState("");

//   const handleChangeAllButton = () => {
//     setState("All");
//   };

//   const handleChangeActiveButton = () => {
//     setState("Active");
//   };

//   const handleChangeCompletedButton = () => {
//     setState("Completed");
//   };
//   const handleInputValue = (event) => {
//     setInputValue([event.target.value]);
//   };
//   const handleAddButton = () => {
//     const uidWithTimestamp = uid.stamp(32);

//     SetTodos([
//       ...todos,
//       { todo: inputValue, status: "Active", id: uidWithTimestamp },
//     ]);
//     setInputValue("");
//   };
//   console.log("this is state value", state);
//   console.log("this is inputy value", inputValue);
//   console.log("this is todos now", todos);

//   return (
//     <div className="bdy">
//       <div className="box">
//         <div className="container">
//           <h1 className="title">To-Do list</h1>
//           <div className="text">
//             <input
//               onChange={handleInputValue}
//               className="input"
//               value={inputValue}
//               placeholder="  Add a new task..."
//             ></input>
//             <button onClick={handleAddButton} className="btn">
//               Add
//             </button>
//           </div>
//           <div className="angilal">
//             <button
//               onClick={handleChangeAllButton}
//               style={{
//                 backgroundColor: state === "All" ? " #3c82f6" : " #f3f4f6",
//               }}
//               className="all ugs"
//             >
//               All
//             </button>
//             <button
//               onClick={handleChangeActiveButton}
//               style={{
//                 backgroundColor: state === "Active" ? " #3c82f6" : " #f3f4f6",
//               }}
//               className="active ugs"
//             >
//               Active
//             </button>
//             <button
//               onClick={handleChangeCompletedButton}
//               style={{
//                 backgroundColor:
//                   state === "Completed" ? " #3c82f6" : " #f3f4f6",
//               }}
//               className="comp ugs"
//             >
//               Completed
//             </button>
//           </div>
//           <div key={todos}>
//             <div className="anhaar">No tasks yet. Add one above!</div>
//             {todos.map((todo) => {
//               return (
//                 <div className="taskNew">
//                   <input className="taskCheck" type="checkbox" />
//                   <p className="taskText">{todo.todo}</p>
//                   <button className="taskDelete">Delete</button>
//                 </div>
//               );
//             })}{" "}
//           </div>
//         </div>
//         <div className="footer">
//           <span>Powered by</span>
//           <span className="pinecone">Pinecone academy</span>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import "./index.css";
import ShortUniqueId from "short-unique-id";

export default function Home() {
  const [state, setState] = useState("All");
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const uid = new ShortUniqueId();

  const handleChangeAllButton = () => setState("All");
  const handleChangeActiveButton = () => setState("Active");
  const handleChangeCompletedButton = () => setState("Completed");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButton = () => {
    const val = inputValue.trim();
    if (!val) return;
    const uidWithTimestamp = uid.stamp(32);
    setTodos((prev) => [
      ...prev,
      { id: uidWithTimestamp, todo: val, status: "Active" },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "Completed" ? "Active" : "Completed" }
          : t
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.state((t) => t.id !== id));
  };
  const statedTodos = todos.state((t) => {
    if (state === "All") return true;
    if (state === "Active") return t.status === "Active";
    if (state === "Completed") return t.status === "Completed";
    return true;
  });

  return (
    <div className="bdy">
      <div className="box">
        <div className="container">
          <h1 className="title">To-Do list</h1>
          <div className="text">
            <input
              onChange={handleInputValue}
              className="input"
              value={inputValue}
              placeholder="  Add a new task..."
              onKeyDown={(e) => e.key === "Enter" && handleAddButton()}
            />
            <button onClick={handleAddButton} className="btn">
              Add
            </button>
          </div>
          <div className="angilal">
            <button
              onClick={handleChangeAllButton}
              style={{
                backgroundColor: state === "All" ? "#3c82f6" : "#f3f4f6",
              }}
              className="all ugs"
            >
              All
            </button>
            <button
              onClick={handleChangeActiveButton}
              style={{
                backgroundColor: state === "Active" ? "#3c82f6" : "#f3f4f6",
              }}
              className="active ugs"
            >
              Active
            </button>
            <button
              onClick={handleChangeCompletedButton}
              style={{
                backgroundColor: state === "Completed" ? "#3c82f6" : "#f3f4f6",
              }}
              className="comp ugs"
            >
              Completed
            </button>
          </div>
          {statedTodos.length === 0 ? (
            <div className="anhaar">No tasks yet. Add one above!</div>
          ) : (
            <div>
              {statedTodos.map((todo) => (
                <div className="taskNew" key={todo.id}>
                  <input
                    className="taskCheck"
                    type="checkbox"
                    checked={todo.status === "Completed"}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <p
                    className="taskText"
                    style={{
                      textDecoration:
                        todo.status === "Completed" ? "line-through" : "none",
                      opacity: todo.status === "Completed" ? 0.6 : 1,
                    }}
                  >
                    {todo.todo}
                  </p>
                  <button
                    className="taskDelete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="footer">
          <span>Powered by</span>
          <span className="pinecone">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
