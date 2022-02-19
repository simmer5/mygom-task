import { IItem } from '~/services/getUserItems'

const oldItems = (itemList: Array<IItem>) => {
	const old = itemList.filter(listItem => {
		const now = new Date()
		const date = new Date(listItem.createdAt)
		const diff = Math.abs(now.getTime() - date.getTime())
		const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
		if (days > 30) {
			return listItem
		}
	})

	return old
}
export default oldItems
