import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (<button onClick = {handleClick}> {text} </button>)

const Statistics = ({text, value,}) => {
	if (isNaN(value) && text === "Positive") {
		return (
			<tr><td>{text}</td><td>0 %</td></tr>
			)
	}
	
	if (isNaN(value)) {
		return (
			<tr><td>{text}</td><td>{0}</td></tr>
			)
	}

	if (text === "Positive") {
		return (
		<tr><td>{text}</td><td>{value + " %"}</td></tr>
		)
	}	

	return (
		<tr><td>{text}</td><td>{value}</td></tr>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)	
	
	const handleClickGood = () => {
		setGood(good + 1)	
	}
	
	const handleClickNeutral = () => {
		setNeutral(neutral + 1)	
	}	
	
	const handleClickBad = () => {
		setBad(bad + 1)	
	}
	
	return (
	<div>
		<h2>Give Feedback</h2>
		<Button handleClick = {handleClickGood} text = "Good"/>
		<Button handleClick = {handleClickNeutral} text = "Neutral"/>
		<Button handleClick = {handleClickBad} text = "Bad"/>
		<h2>Statistics</h2>
		<table>
			<tbody>
				<Statistics text = "Good" value = {good}/>
				<Statistics text = "Neutral" value = {neutral}/>
				<Statistics text = "Bad" value = {bad}/>
				<Statistics text = "All" value = {good + neutral + bad}/>
				<Statistics text = "Average" value = {((good * 1) - (bad * 1)) / (good + neutral + bad)}/>
				<Statistics text = "Positive" value = {((good / (good + neutral + bad)) * 100)}/>
			</tbody>
		</table>	
	</div>
	)
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)