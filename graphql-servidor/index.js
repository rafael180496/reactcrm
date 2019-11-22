import express from "express";
import { PUERTOAPP, HOSTNAME } from "./utility/constantes";
import {ApolloServer } from "apollo-server-express";
import {typeDefs } from './data/schema'
import {resolvers } from './data/resolvers'
import { PrintSer } from "./utility/generic";

const app = express();
const server = new ApolloServer({typeDefs,resolvers})
server.applyMiddleware({app})

app.listen({port:PUERTOAPP},()=>{
  PrintSer(`El servidor esta corriendo ${HOSTNAME}:${PUERTOAPP}${server.graphqlPath}`)
})