import gql from "graphql-tag";

export const ClienteService = {
  GetCliente: () => {
    return gql`
      query ConsultarCliente($id: ID) {
        getCliente(id: $id) {
          ...ClientesGET
        }
      }

      fragment ClientesGET on Cliente {
        id
        nombre
        apellido
        empresa
        emails {
          email
        }
        edad
        tipo
        pedidos {
          producto
          precio
        }
      }
    `;
  },
  GetClientes: () => {
    return gql`
      query getClientes($limite:Int, $offset:Int){
        getClientes(limite:$limite,offset:$offset) {
          ...ViewCliente
        }
        totalClientes
      }
      fragment ViewCliente on Cliente {
        id
        nombre
        apellido
        empresa
      }
    `;
  },
  PostCliente: () => {
    return gql`
      mutation crearCliente($input: ClienteInput) {
        crearCliente(input: $input) {
          id
          nombre
          apellido
          empresa
        }
      }
    `;
  },
  PutCliente: () => {
    return gql`
      mutation actualizarCliente($input: ClienteInput) {
        actualizarCliente(input: $input) {
          id
          nombre
          apellido
          empresa
        }
      }
    `;
  },
  DeleteCliente: () => {
    return gql`
      mutation eliminarCliente($id: ID!) {
        eliminarCliente(id: $id)
      }
    `;
  }
};
