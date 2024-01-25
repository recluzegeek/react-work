import React from "react";

export default function ToDoList({ todo }) {
  if (!todo) return;
  const { title, description } = todo.attributes;
  return (
    <div className="border-solid border-black border-2 m-2 p-3">
      <h3 className="text-3xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
