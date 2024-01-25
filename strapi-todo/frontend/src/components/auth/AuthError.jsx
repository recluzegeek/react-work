import React from "react";

export default function Error({ error }) {
  if (!error) return;
  const { message, name } = error;
  return (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">Be Warned! &mdash; {name}</p>
      <p>Something not ideal happened. {message}</p>
    </div>
  );
}
