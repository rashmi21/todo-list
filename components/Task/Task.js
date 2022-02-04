import React from 'react';
import './Task.css';

const Task = ({ task, index, completeTask, removeTask, favTask }) => {

	return (
		<div className="task" style={{ textDecoration: task.completed ? "line-through" : "" }} >
			{task.title}
			<button id="fav" style={{ background: "green", color: task.isFavourite ? '#F4B30A': ""}} onClick={() => favTask(index)}>★</button>
			<button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
			<button onClick={() => completeTask(index)}>Complete</button>
		</div>
	);
}

export default Task;
