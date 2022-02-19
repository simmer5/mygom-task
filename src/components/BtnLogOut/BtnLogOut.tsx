import { useHistory } from 'react-router-dom'
import { Routes } from '~/constants'

import logout from '../../services/logout'

const BtnLogOut = ({ username }) => {
	const { push } = useHistory()
	const handleLogout = () => {
		logout()
		push(Routes.Login)
	}

	return <button onClick={handleLogout}>{`Logout ${username}`}</button>
}

export default BtnLogOut
