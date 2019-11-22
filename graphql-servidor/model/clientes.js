import mongoose from 'mongoose'

export const emailSchema = new mongoose.Schema({
    email: String
})

export const clientesSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    emails: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
})