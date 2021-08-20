import path from 'path'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema(path.resolve(__dirname, './schema.graphql'))

export default typeDefs
