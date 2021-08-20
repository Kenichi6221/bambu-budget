import { ApolloServer } from 'apollo-server'
import { config } from 'dotenv'
import logger from './configurations/logger'
import resolvers from './api_graphql/mainResolver'
import typeDefs from './api_graphql/typeDefs'
import connectDB from './configurations/db'

config()

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

connectDB()
	.then(() => server.listen())
	.then(({ url }: { url: string }) => {
		logger.info(`🚀  Server ready at ${url}`)
	})
	.catch((error) => logger.error(`we have an error:${error}`))
