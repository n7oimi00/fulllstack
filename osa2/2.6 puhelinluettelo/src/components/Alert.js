import React from 'react'

const Alert = ({ alertMessage }) => {
	const succes = {
		color: 'green'
	}
	const failure = {
		color: 'red'
	}
	
	
	if (!alertMessage) {
		return null;
	} else if (alertMessage === "Number already deleted") {
		return (
			<div style={failure}>
				<p>{alertMessage}</p>
			</div>
		)
	}
	
	return (
		<div style={succes}>
			<p>{alertMessage}</p>
		</div>
	)
}

export default Alert