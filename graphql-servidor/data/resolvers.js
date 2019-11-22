import mongoose from "mongoose";
import { Clientes } from "../model/db";
import { validarLimite, validaroffset } from "../utility/pipes";
const clientesDB = {};

export const resolvers = {
    Query: {
        getClientes: async(root, { limite, offset }) => {
            try {
                limite = validarLimite(limite);
                offset = validaroffset(offset)
                let datos = await Clientes.find({}).limit(limite).skip(offset);
                return datos;
            } catch (err) {
                return err;
            }
        },
        getCliente: async(root, { id }) => {
            try {
                let dato = await Clientes.findById(id);
                return dato;
            } catch (err) {
                return err;
            }
        },
        totalClientes: async(root) => {
            try {
                let dato = await Clientes.countDocuments()
                return dato
            } catch (err) {
                return err;
            }
        }
    },
    Mutation: {
        crearCliente: (root, { input }) => {
            const newCliente = new Clientes({
                nombre: input.nombre,
                apellido: input.apellido,
                empresa: input.empresa,
                emails: input.emails,
                edad: input.edad,
                tipo: input.tipo,
                pedidos: input.pedidos
            });
            newCliente.id = newCliente._id;

            return new Promise((resolve, rejects) => {
                newCliente.save(err => {
                    if (err) rejects(err);
                    else resolve(newCliente);
                });
            });
        },

        actualizarCliente: async(root, { input }) => {
            try {
                const newItem = await Clientes.findOneAndUpdate({ _id: input.id },
                    input, {
                        new: true
                    }
                );
                return newItem;
            } catch (err) {
                return err;
            }
        },
        eliminarCliente: async(root, { id }) => {
            try {
                await Clientes.findOneAndRemove({ _id: id });
                return "Se elimino correctamente";
            } catch (err) {
                return `${err}`;
            }
        }
    }
};