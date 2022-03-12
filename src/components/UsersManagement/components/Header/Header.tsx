import { FC } from 'react'
import BtnLogOut from '../../../BtnLogOut/BtnLogOut'
import { IItem } from '~/services/getUserItems'
import itemHasWrongEmail from '~/utils/itemHasWrongEmail'

import './header-style.scss'

interface IHeader {
	items: Array<IItem>
	username: string
}

const Header: FC<IHeader> = ({ items, username }) => {
	return (
		<div className='header'>
			<div className='user-section'>
				<BtnLogOut username={username} />
			</div>

			<h1>{`${itemHasWrongEmail(items).length} Emails are wrong`}</h1>
			<span>
				Email validator to protect your company from bad registrations
			</span>
		</div>
	)
}

export default Header
