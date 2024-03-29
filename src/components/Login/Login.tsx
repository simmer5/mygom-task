import { SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Routes } from '~/constants'
import login from '~/services/login'
import LoadingScreen from '../LoadingScreen'
import ErrorBlock from '../ErrorBlock'

import './login-style.scss'

const Login = () => {
	const { push } = useHistory()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string>()

	const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()
		setErrorMessage(null)

		try {
			setLoading(true)
			await login(username, password)
			push(Routes.Users)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			setErrorMessage(error.message)
		}
	}

	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (
				<div className='login-page'>
					<form className='login-form' onSubmit={handleSubmit}>
						<h1 className='text-center'>Mygom.tech</h1>
						<input
							value={username}
							onChange={event => setUsername(event.target.value)}
							placeholder='Username'
							type='text'
							className='input mt-52px'
						/>
						<input
							value={password}
							onChange={event => setPassword(event.target.value)}
							placeholder='Password'
							type='password'
							className='input mt-24px'
						/>
						<ErrorBlock error={errorMessage} />
						<button type='submit' className='button mt-24px'>
							Login
						</button>
					</form>
				</div>
			)}
		</>
	)
}

export default Login
