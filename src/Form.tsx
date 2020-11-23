import React, { useContext } from "react";
import { AppContext} from "./App";

function Form() {
  const ctx = useContext(AppContext)!;

  const inputTextChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    ctx.setInputText(e.target.value);
  };

  const buttonOnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    ctx.setTodos([
      ...ctx.todos,
      {
        id: Math.ceil(Math.random() * 100000),
        text: ctx.inputText,
        completed: false,
      },
    ]);

    ctx.setInputText("");
  };

  const selectionChangedHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    ctx.setSelection(e.target.value);
  };

  return (
    <form>
      <input
        value={ctx.inputText}
        onChange={inputTextChangedHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={buttonOnClickHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          value={ctx.selection}
          onChange={selectionChangedHandler}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
