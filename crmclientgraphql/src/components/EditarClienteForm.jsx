import React, { Component, Fragment } from "react";
import { ClienteFormat } from "../utility/interface/cliente";
import { ClienteService } from "../service/clientesser";
import { Mutation } from "react-apollo";
import { ValidarCliente, ParseQuerie } from "../utility/pipes/validador";
import { AlertaMenjs } from "./generic/alert";
import { InputEmail } from "./generic/inputemail";
import { withRouter } from "react-router-dom";

class EditarClienteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: ClienteFormat,
      error: false,
      paginador: {
        offset: 0,
        actual: 1
      }
    };
  }
  componentDidMount() {
    let { cliente } = this.props;
    cliente = ParseQuerie(cliente);
    this.setState({
      cliente: cliente
    });
  }

  obtenerCampo = (indice = 0, text = "") => {
    let { emails } = this.state.cliente;
    emails[indice] = {
      email: text
    };
    this.setState({
      cliente: {
        ...this.state.cliente,
        emails
      }
    });
  };
  CapturarCliente = e => {
    this.setState({
      cliente: {
        ...this.state.cliente,
        [e.target.name]: e.target.value
      }
    });
  };

  EnviarDatos = () => {
    //destruccion
    const {
      id,
      nombre,
      apellido,
      empresa,
      edad,
      tipo,
      emails
    } = this.state.cliente;
    const data = {
      id,
      nombre,
      apellido,
      empresa,
      emails,
      edad: Number(edad),
      tipo: tipo.replace(" ", ""),
      pedidos: [
        { producto: "prueba", precio: 50 },
        { producto: "prueba", precio: 50 }
      ]
    };

    return data;
  };
  quitarCampo = indice => {
    this.setState({
      cliente: {
        ...this.state.cliente,
        emails: this.state.cliente.emails.filter(
          (email, index) => indice !== index
        )
      }
    });
  };

  NuevoCampo = e => {
    this.setState({
      cliente: {
        ...this.state.cliente,
        emails: [...this.state.cliente.emails, { email: "" }]
      }
    });
  };

  Redirec = () => {
    this.props.recargar().then(() => {
      this.props.history.push("/");
    });
  };
  render() {
    const { error } = this.state;
    const { emails } = this.state.cliente;
    const respuesta = error ? (
      <AlertaMenjs menjs="Todos los campos son Obligatorios" />
    ) : (
      ""
    );

    return (
      <Fragment>
        <h2 className="text-center">Editar Cliente</h2>
        {respuesta}
        <div className="row justify-content-center">
          <Mutation
            mutation={ClienteService.PutCliente()}
            onCompleted={this.Redirec}
          >
            {actualizarCliente => (
              <form
                className="col-md-8 m-3"
                onSubmit={e => {
                  e.preventDefault();
                  let input = this.EnviarDatos();
                  let err = ValidarCliente(input);
                  this.setState({
                    error: err
                  });
                  if (err) {
                    return;
                  }
                  actualizarCliente({
                    variables: { input }
                  });
                }}
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      name="nombre"
                      value={this.state.cliente.nombre}
                      onChange={this.CapturarCliente}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido"
                      name="apellido"
                      value={this.state.cliente.apellido}
                      onChange={this.CapturarCliente}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Empresa</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Empresa"
                      name="empresa"
                      value={this.state.cliente.empresa}
                      onChange={this.CapturarCliente}
                    />
                  </div>
                  {emails.map((item, index) => {
                    return (
                      <InputEmail
                        index={index}
                        key={index}
                        quitarCampo={this.quitarCampo}
                        obtenerCampo={this.obtenerCampo}
                        text={item.email}
                      />
                    );
                  })}
                  <div className="form-group d-flex justify-content-center col-md-12">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={this.NuevoCampo}
                    >
                      +Agregar Email
                    </button>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Edad</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Edad"
                      name="edad"
                      value={this.state.cliente.edad}
                      onChange={this.CapturarCliente}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Tipo Cliente</label>
                    <select
                      className="form-control"
                      name="tipo"
                      value={this.state.cliente.tipo}
                      onChange={this.CapturarCliente}
                    >
                      <option value="">Elegir...</option>
                      <option value="PREMIUM">PREMIUM</option>
                      <option value="BASICO">BASICO</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-success float-right">
                  Guardar cambios
                </button>
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(EditarClienteForm);
