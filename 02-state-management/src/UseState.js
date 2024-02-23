import { useEffect, useState } from "react";

const SECURITY_CODE = '141987';

function UseState({ name }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (loading) {
      setError(false);
      setTimeout(() => {
        if (value === SECURITY_CODE) {
          setLoading(false);
        } else {
          setError(true);
        }
        setLoading(false);
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>
      <input
        placeholder="148632"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
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
