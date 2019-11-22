import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { ClienteService } from "../service/clientesser";
import ClienteCard from "../components/cliente";
import { TIMESLEEP } from "../utility/constante";
import Paginacion from "../components/paginador";
import { GETCOUNT } from "../utility/constante";
class Clientes extends Component {
  state = {
    paginador: {
      actual: 1,
      offset: 0
    }
  };
  pagControl = indsig => {
    let {actual,offset}=this.state.paginador
    if (indsig) {
      actual++
      offset+=GETCOUNT
      
    } else {
      actual--
      offset-=GETCOUNT
    }
    this.setState({
      paginador: {
        actual,
        offset
      }
    });
  };

  render() {
    const { actual, offset } = this.state.paginador;
    return (
      <Query
        query={ClienteService.GetClientes()}
        pollInterval={TIMESLEEP}
        variables={{ limite: GETCOUNT, offset: offset }}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Cargando...";
          if (error) return `Error: ${error.mesage}`;
          let total = data.totalClientes;
          let paginas = Math.ceil(total / GETCOUNT);
          return (
            <Fragment>
              {total > 0 ? (
                <Fragment>
                  <h2 className="text-center">Listado de Clientes.</h2>
                  <ul className="list-group mt-4">
                    {data.getClientes.map(item => {
                      return (
                        <li key={item.id} className="list-group-item">
                          <ClienteCard cliente={item} />
                        </li>
                      );
                    })}
                  </ul>

                  <Paginacion
                    actual={actual}
                    total={total}
                    limite={GETCOUNT}
                    pagControl={this.pagControl}
                    paginas={paginas}
                  ></Paginacion>
                </Fragment>
              ) : (
                <h2 className="text-center">Listado de clientes vacio.</h2>
              )}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
export default Clientes;
