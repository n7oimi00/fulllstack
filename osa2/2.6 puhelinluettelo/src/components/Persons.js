import React from 'react'

const Persons = ({filter, persons, deletePerson}) => {
	
const namesToShow = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons
const rows = namesToShow.map(person => <p key={person.name}>{person.name} {person.number} <button onClick={() => {deletePerson(person.id)}}>Delete</button></p>)

	return (
	<div>
		{rows}
	</div>
	)
}

export default Persons