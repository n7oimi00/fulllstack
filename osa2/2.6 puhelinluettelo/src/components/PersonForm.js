import React from 'react'

const PersonForm = ({addNumber, newName, nameChange, newNumber, numberChange}) => {
	return (
	<div>
	<form onSubmit={addNumber}>
		Name: <input value={newName} onChange={nameChange}/>
		Number: <input value={newNumber} onChange={numberChange}/>
		<button type="submit">add</button>
	</form>	
	</div>
	)
}

export default PersonForm