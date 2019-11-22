import { importSchema } from "graphql-import";
const typeDefs = importSchema("data/schemas/schema.graphql");
export { typeDefs };