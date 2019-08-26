import React from 'react'

	const Course = ({courses}) => 
		courses.map(course => 
			<div key={course.name}>
			<h2>{course.name}</h2>
			{course.parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)}
			<p><b>Total of {course.parts.reduce((a, b) => a + b.exercises, 0)} exercises</b></p>	
			</div>
		)
		
export default Course