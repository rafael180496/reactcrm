import mongoose from 'mongoose'
import { clientesSchema } from './clientes';


mongoose.Promise = global.Promise
const cnx = {
    user: "root",
    pass: "abc123",
    host: "192.168.252.222",
    port: 27016,
    db: "clientes"
}

const url = `${cnx.host}:${cnx.port}`

mongoose.connect(`mongodb://${cnx.user}:${cnx.pass}@${url}/${cnx.db}?authSource=admin`, { useNewUrlParser: true, useFindAndModify: false })


/*modelos de mongoose */
const Clientes = mongoose.model('clientes', clientesSchema)

export { Clientes }