import { useEffect, useState } from "react";

function UseState({ name }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>
      <input placeholder="148632" />
      <button onClick={() => setLoading(!loading)}>
        Comprobar
      </button>
      {error && (
        <p>Error: Código incorrecto</p>
      )}
      {loading && (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export { UseState }
