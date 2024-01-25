import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";

export default function ToDoApplication() {
  const [toDos, setToDos] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const todos = await response.json();
      console.log(todos);
      setToDos(todos.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(`${import.meta.env.VITE_REACT_APP_BACKEND}/api/to-dos`);
  }, []);

  return (
    <div>
      {toDos && toDos.map((todo) => (
        <ToDoList key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
