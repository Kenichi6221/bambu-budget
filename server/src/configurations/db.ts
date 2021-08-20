import mongoose from 'mongoose'
import logger from './logger'

const connectDB = async (): Promise<void> => {
	try {
		const conn: string = process.env.BAMBU_DB || ''
		await mongoose.connect(conn, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		})
		logger.info('db connection was succesful')
	} catch (error) {
		logger.error(error)
		throw error
	}
}

export default connectDB
