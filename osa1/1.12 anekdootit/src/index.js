import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(new Array(6).fill(0))
	
	console.log(props)
  
	const handleVote = () => {
		console.log(votes)
		let copy = [...votes]
		copy[selected] += 1
		setVotes(copy)
	}
  
	const handleClick = () => { 
		let selectedAnecdote = Math.floor(Math.random() * (props.anecdotes.length))
		setSelected(selectedAnecdote)
		} 

	const findMostVoted = () => {
		let mostVoted = 0
		let numberOfVotes = 0
		
		for (var i = 0; i < votes.length; i++) {
			if (votes[i] > numberOfVotes) {
				mostVoted = i
				numberOfVotes = votes[i]
			}
		}
		
		if (numberOfVotes == 0) {
			return (
			"No votes"
			)
		}
		
		return (
			props.anecdotes[mostVoted]
		)
	}

  return (
    <div>
		<h2>Anecdote of the day</h2>
		<p>
		<button onClick={handleVote}>Vote</button>
		<button onClick={handleClick}>Next anecdote</button>
		</p>
		<p>{props.anecdotes[selected]}</p>
		<h2>Anecdote with most votes</h2>
		<p>{findMostVoted()}</p>
		
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)