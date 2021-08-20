import { Schema, model, Document } from 'mongoose'

export interface IPocket extends Document {
	name: string
	startBalance: number
	currentBalance: number
	state: string
	isActive: boolean
}

const pocketSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	startBalance: {
		type: Number,
		required: true
	},
	currentBalance: {
		type: Number
	},
	state: {
		type: String
	},
	isActive: {
		type: Boolean,
		default: true
	}
})

export default model<IPocket>('Pocket', pocketSchema)
