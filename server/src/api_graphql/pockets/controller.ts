import Pocket, { IPocket } from '../../models/pocket'

class PocketController {
	async getPocketById(pocketId: string): Promise<IPocket | null> {
		const filter = { isActive: true, _id: pocketId }
		const foundPocket = await Pocket.findOne(filter)
		return foundPocket
	}

	async getAllPockets(): Promise<IPocket[]> {
		const filter = { isActive: true }
		const pocketCollection = (await Pocket.find(filter)) || []
		return pocketCollection
	}

	async createPocket(input: IPocket): Promise<IPocket | null> {
		const { state, name, startBalance } = input
		const newPocket = new Pocket({
			state,
			name,
			startBalance,
			currentBalance: startBalance
		})
		await newPocket.save()

		return newPocket
	}

	async updatePocket(input: IPocket): Promise<IPocket | null> {
		const filter = { isActive: true, _id: input.id }
		const pocketModified = await Pocket.findOne(filter)

		if (pocketModified) {
			pocketModified.name = input.name
			pocketModified.startBalance = input.startBalance
			await pocketModified.save()
		}

		return pocketModified
	}

	async deletePocket(pocketId: string): Promise<IPocket | null> {
		const filter = { _id: pocketId }
		const pocketModified = await Pocket.findOne(filter)
		if (pocketModified) {
			pocketModified.isActive = false
			await pocketModified.save()
		}
		return pocketModified
	}
}
export default PocketController
