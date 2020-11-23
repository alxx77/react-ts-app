import React, { useContext } from "react";
import "./Item.css";
import { AppContext, ITodo } from "./App";

function Item({ todo }: { todo: ITodo }) {
  const ctx = useContext(AppContext)!;

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    ctx.setTodos(ctx.todos.filter((tx) => tx.id !== todo.id));
  };

  const checkHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const idx = ctx.todos.findIndex((tx) => tx.id === todo.id);

    const todos_copy = Array.from(ctx.todos);

    todos_copy[idx].completed = !todos_copy[idx].completed;

    ctx.setTodos(todos_copy);
  };

  return (
    <div className="item">
      <li className={`todo-item  ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={checkHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Item;
