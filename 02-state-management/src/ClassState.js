import React from "react";

const SECURITY_CODE = '141987';

class ClassState extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      loading: false,
      value: ''
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (SECURITY_CODE === this.state.value) {
          this.setState({error: false, loading: false});
        } else {
          this.setState({error: true, loading: false});
        }
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad</p>
        <input
          placeholder="148632"
          value={this.state.value}
          onChange={(event) => {this.setState({value: event.target.value})}}
        />
        <button onClick={() => this.setState({error: false, loading: true})}>
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
