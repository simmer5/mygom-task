import { useState, useEffect } from 'react'

const logout = () => {
	// Isvalom tokena is localstorage
	localStorage.removeItem('token')
}

export default logout
