import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ClienteService } from "../service/clientesser";
import { Query } from "react-apollo";
import EditarClienteForm from "./EditarClienteForm";
class EditarCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Redirec = () => {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  };

  render() {
    let { id } = this.props.match.params;
    if (id == null || id === undefined) {
      this.props.history.push("/error/505");
    }
    return (
      <Query query={ClienteService.GetCliente()} variables={{ id }} >
        {({ loading, error, data,refetch }) => {
          if (loading) return "Cargando...";
          if (error || data === undefined || data === null) {
            return this.Redirec();
          } else {
            return <EditarClienteForm cliente={data.getCliente}  recargar={refetch}/>;
          }
        }}
      </Query>
    );
  }
}
export default EditarCliente;
