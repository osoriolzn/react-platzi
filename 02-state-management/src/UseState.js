import React, { useState } from "react";

function UseState({ name }) {
  const [error, setError] = useState(false);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>
      <input placeholder="148632" />
      <button onClick={() => setError(!error)}>
        Comprobar
      </button>
      {error && (
        <p>Error: Código incorrecto</p>
      )}
    </div>
  );
}

export { UseState }