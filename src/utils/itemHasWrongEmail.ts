import { IItem } from '~/services/getUserItems'

const itemHasWrongEmail = (itemList: Array<IItem>) => {
	const nonValidEmails = itemList.filter(item => {
		let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		const email = item.email
		if (!email.match(mailformat)) return item
	})

	return nonValidEmails
}

export default itemHasWrongEmail
