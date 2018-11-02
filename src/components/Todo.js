import React from 'react';
import { Link } from 'react-router-dom';

const Todo = ({ id, title, description, dueAt, isCompleted, onTodoCompleteChange }) => {
	return (
		<div>
			<h1>
				<Link to={`/todos/${id}`}>{title}</Link>
			</h1>
			<p>{description}</p>
			{!!dueAt && <small>{dueAt.toISOString()}</small>}
			<div>
				<label>
					<input type="checkbox" checked={isCompleted} onChange={onTodoCompleteChange} /> Completed
				</label>
			</div>
		</div>
	);
};

export default Todo;
