import React, { createContext, useState } from "react";
import "./App.css";
import Item from "./Item";
import Form from "./Form";

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface ICTX {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  selection: string;
  setSelection: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext: React.Context<ICTX | null> = createContext<ICTX | null>(
  null
);

function App() {
  const [inputText, setInputText] = useState("aaaaaaaa");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selection, setSelection] = useState("all");

  let p = {
    inputText,
    setInputText,
    todos,
    setTodos,
    selection,
    setSelection,
  };

  return (
    <div className="App">
      <AppContext.Provider value={p}>
        <h1 className="app__header">ToDO...</h1>
        <Form />
        {todos.map((el) => {
          let item: ITodo | null = null;
          if (selection === "all") {
            item = el;
          } else {
            if (el.completed === (selection === "completed" ? true : false)) {
              item = el;
            }
          }
          if (item) {
            return (
              <Item key={item.id} todo={item} />
            );
          }
        })}
      </AppContext.Provider>
    </div>
  );
}

export default App;
