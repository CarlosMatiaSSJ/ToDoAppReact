import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  if (total == completed )
  return (
    <h2 className="TodoCounter"> Has Completado todos los TODOs!!</h2>
  )
  else return (
    <h2 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> tareas
    </h2>
  );
}

export { TodoCounter };
