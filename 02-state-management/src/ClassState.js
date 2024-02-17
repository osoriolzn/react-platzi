import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad</p>
        <input placeholder="148632" />
        <button onClick={() => this.setState({error: !this.state.error})}>
          Comprobar
        </button>
        {this.state.error && (
          <p>Error: Código incorrecto</p>
        )}
      </div>
    );
  }
}

export { ClassState }