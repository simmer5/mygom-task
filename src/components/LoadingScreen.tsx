import LoadingDots from './LoadingDots/LoadingDots'

const LoadingScreen = () => (
	<div
		style={{
			height: '100vh',
			width: '100 %',
			display: 'flex',
			alignItems: 'center',
			background: '#1e1e1e',
		}}
	>
		<LoadingDots />
	</div>
)

export default LoadingScreen
