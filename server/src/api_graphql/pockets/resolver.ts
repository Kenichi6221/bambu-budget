import { IPocket } from '../../models/pocket'
import PocketController from './controller'
import IParentNode from '../IParentNode'

const pocketResolver = {
	Query: {
		getAllPockets: async (): Promise<IPocket[]> => {
			const controller: PocketController = new PocketController()
			return controller.getAllPockets()
		},
		getPocketById: async (
			_: IParentNode,
			{ pocketId }: { pocketId: string }
		): Promise<IPocket | null> => {
			const controller: PocketController = new PocketController()
			return controller.getPocketById(pocketId)
		}
	},
	Mutation: {
		createPocket: async (
			_: IParentNode,
			{ pocket }: { pocket: IPocket }
		): Promise<IPocket | null> => {
			const controller: PocketController = new PocketController()
			return controller.createPocket(pocket)
		},
		updatePocket: async (
			_: IParentNode,
			{ pocket }: { pocket: IPocket }
		): Promise<IPocket | null> => {
			const controller: PocketController = new PocketController()
			return controller.updatePocket(pocket)
		},
		deletePocket: async (
			_: IParentNode,
			{ pocketId }: { pocketId: string }
		): Promise<IPocket | null> => {
			const controller: PocketController = new PocketController()
			return controller.deletePocket(pocketId)
		}
	}
}

export default pocketResolver
