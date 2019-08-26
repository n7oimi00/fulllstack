import React from 'react'

	const Rows = ({filter, countries, setFilter}) => {
		if (!filter) {
			return (
				<div>
				<p></p>
				</div>
			)
		}
		
		const shownCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
		
		if (shownCountries.length > 10) {
			return (
				<div>
				<p>Too many matches, specify another filter</p>
				</div>
			)
		} else if (shownCountries.length > 1) {
			return (
				<div>
				{shownCountries.map(country => 
					<p key={country.name}>{country.name} <button onClick={() => setFilter(country.name)}>Show</button></p>
					
				)}
				</div>
			)
		} else if (shownCountries.length === 1) {
			const country = shownCountries[0]
			console.log(country)
			return (
			<div>
			<h2>{country.name}</h2>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<h3>Languages</h3>
			<ul>
			{country.languages.map(language => <li key={language.name}>{language.name}</li>)}
			</ul>
			<img src={country.flag} alt="flag"/>
			</div>
			)
		} else {
			return (
			<div>
			<p>No results</p>
			</div>
			)
		}	
		
	}

export default Rows