import { FC } from 'react'
import { Routes } from '~/constants'
import { IItem } from '~/services/getUserItems'
import FilterTab from './components/FilterTab'
import itemHasWrongEmail from '~/utils/itemHasWrongEmail'
import oldItems from '~/utils/oldItems'
import itemHasReusedEmail from '~/utils/itemHasReusedPassword'

import './filter-style.scss'

interface IFilter {
	items: Array<IItem>
}

const Filter: FC<IFilter> = ({ items }) => {
	const wrongItemsEmailCount = items => itemHasWrongEmail(items).length

	const reusedItemsCount = items => {
		const reused = items.filter(item => itemHasReusedEmail(item, items)).length
		return reused
	}

	const oldItemsCount = items => oldItems(items).length

	return (
		<div className='filter'>
			<FilterTab title='all' count={items.length} path={Routes.Users} />
			<FilterTab
				title='Wrong'
				count={wrongItemsEmailCount(items)}
				path={Routes.Wrong}
			/>
			<FilterTab
				title='Reused'
				count={reusedItemsCount(items)}
				path={Routes.Reused}
			/>

			<FilterTab title='Old' count={oldItemsCount(items)} path={Routes.Old} />
		</div>
	)
}

export default Filter
