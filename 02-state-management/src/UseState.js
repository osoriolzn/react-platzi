import { useEffect, useState } from "react";

const SECURITY_CODE = '141987';

function UseState({ name }) {
  const [state, setState] = useState({
    error: false,
    loading: false,
    value: ''
  });
  
  useEffect(() => {
    if (state.loading) {
      setState({...state, error: false});
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          console.log("Validate Code");
          setState({...state, error: false, loading: false});
        } else {
          console.log("Code not valid");
          setState({...state, error: true, loading: false});
        }
      }, 3000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad</p>
      <input
        placeholder="148632"
        value={state.value}
        onChange={(event) => {
          setState({...state, value: event.target.value});
        }}
      />
      <button onClick={() => setState({...state, loading: true})}>
        Comprobar
      </button>
      {state.error && (
        <p>Error: Código incorrecto</p>
      )}
      {state.loading && (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export { UseState }
