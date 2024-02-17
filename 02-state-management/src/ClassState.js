import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      loading: false
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({loading: false});
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad</p>
        <input placeholder="148632" />
        <button onClick={() => this.setState({loading: true})}>
          Comprobar
        </button>
        {this.state.error && (
          <p>Error: Código incorrecto</p>
        )}
        {this.state.loading && (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
}

export { ClassState }
