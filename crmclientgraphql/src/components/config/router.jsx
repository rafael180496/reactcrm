import Clientes from "../../page/clientes";
import ClienteNuevo from "../clienteNuevo";
import EditarCliente from "../clienteEditar";
import NotMatch from "../../page/nomatch";

export const ROUTERS_APP = [
    {
      path: "/",
      pos: 1,
      descrip: "Clientes",
      component: Clientes
    },
    {
      path: "/cliente/nuevo",
      pos: 2,
      descrip: "Cliente Nuevo",
      component: ClienteNuevo
    },
    {
      path: "/cliente/editar/:id",
      pos: 3,
      descrip: "Editar Cliente",
      component: EditarCliente
    },{
      path: "/error/:cod",
      pos: 4,
      descrip: "Error de la pagina",
      component: NotMatch
    }
  ];