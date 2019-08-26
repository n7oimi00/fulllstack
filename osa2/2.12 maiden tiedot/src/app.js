import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Rows from './components/Rows'

const App = () => {
	const [countries, setCountries] = useState([])
	const [filter, setFilter] = useState("")
	
	useEffect(() => {
		axios
		.get('https://restcountries.eu/rest/v2/all')
		.then(response => {
			setCountries(response.data)
		})
	}, [])
	
	const searchBarChange = (event) => {setFilter(event.target.value)}
	
	return (
	<div>
	Find Countries <input value={filter} onChange={searchBarChange}/>
	<Rows filter={filter} countries={countries} setFilter={setFilter}/>
	</div>
	)
}

export default App