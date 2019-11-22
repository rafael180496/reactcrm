import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import { ClienteService } from "../service/clientesser";
class ClienteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { cliente } = this.props;
    return (
      <Fragment>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            {cliente.nombre} {cliente.apellido} - {cliente.empresa}
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <Mutation mutation={ClienteService.DeleteCliente()}>
              {eliminarCliente => (
                <button
                  className="btn btn-danger d-md-inline-block mr-2"
                  onClick={() => {
                    eliminarCliente({
                      variables: {
                        id: cliente.id
                      }
                    });
                  }}
                >
                  &times; Eliminar
                </button>
              )}
            </Mutation>

            <Link
              to={`/cliente/editar/${cliente.id}`}
              className="btn btn-success d-block d-md-inline-block"
            >
              Editar Cliente
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
ClienteCard.propTypes = {
  cliente: PropTypes.object.isRequired
};
export default ClienteCard;
