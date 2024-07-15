import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./navbar";
import "./tailwind.css";
import ParentComp from "./componentQuestions/parent_comp";
import CounterParent from "./componentQuestions/counter_parent";
import MessageParent from "./componentQuestions/message_parent";
import ToDoApp from "./To-do List/Todo";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
<ToDoApp/>
  {/* <React.StrictMode>
    <App />
    <ParentComp />
    <CounterParent/>
    <MessageParent/>
  </React.StrictMode> */}
  </>
);
