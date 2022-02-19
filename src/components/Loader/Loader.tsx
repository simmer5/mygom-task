import React from 'react'
import './Loader.module.scss'

const Loader = () => {
	return (
		<div className='loading'>
			<div className='circle'></div>
			<div className='circle'></div>
			<div className='circle'></div>
		</div>
	)
}

export default Loader
