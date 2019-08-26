import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Alert from './components/Alert'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  
  useEffect(() => {
	personService.getAll()
		.then(persons => {
		setPersons(persons)	
		})
  }, [])
  
  const addNumber = (event) => {
		event.preventDefault()
		
		if (persons.some(person => person.name === newName)) {
			if (window.confirm (`Replace ${newName}?`)) {
				const person = persons.find(n => n.name === newName)
				const changedPerson = {...person, number: newNumber}
				
				personService.update(person.id, changedPerson)
					.then(returnedPerson => {
						setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
						setNewName("")
						setNewNumber("")
						setAlertMessage("Number updated")
						setTimeout(() => {
							setAlertMessage(null)
							}, 5000)						
					}).catch(error => {
						setAlertMessage("Number already deleted")
						setTimeout(() => {
							setAlertMessage(null)
							}, 5000)
						setPersons(persons.filter(n => n.id !== person.id))			
					})
			}
		} else if ((!persons.some(person => person.name === newName)))
			{
				const nameObject = {
					name: newName,
					number: newNumber
				}
				personService.create(nameObject)
				.then(returnedPerson => {
					setPersons(persons.concat(returnedPerson))
				})
				setNewName("")
				setNewNumber("")
				setAlertMessage("Number added")
				setTimeout(() => {
					setAlertMessage(null)
					}, 5000)					
			}
  }
  
	const deletePerson = (id) => {
		if (window.confirm ("Delete person?")){
			personService.deletePerson(id)
			.then( () => {
				setPersons(persons.filter(person => person.id !== id))
				setAlertMessage("Number deleted")
				setTimeout(() => {
					setAlertMessage(null)
					}, 5000)	
			}).catch(error => {
					setAlertMessage("Number already deleted")
					setTimeout(() => {
						setAlertMessage(null)
						}, 5000)
					setPersons(persons.filter(n => n.id !== id))	
			})
		
		}
	}
  
	const filterChange = (event) => {
		setFilter(event.target.value)
	}
  
	const nameChange = (event) => {
	  setNewName(event.target.value)
  }
  
	const numberChange = (event) => {
	setNewNumber(event.target.value)
	}
		
  return (
    <div>
      <h2>Phonebook</h2>
	  <Alert alertMessage={alertMessage}/>
	  <Filter filter={filter} filterChange={filterChange}/>
	  <h2>Add a new</h2>
	  <PersonForm addNumber={addNumber} newName={newName} nameChange={nameChange} newNumber={newNumber} numberChange={numberChange}/>
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} deletePerson={deletePerson}/>
    </div>
  )

}

export default App