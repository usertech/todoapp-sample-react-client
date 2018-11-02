import React from 'react';
import TodoForm from 'forms/TodoForm';
import { Link } from 'react-router-dom';

const TodoDetailScreen = ({ todoId, todos, handleUpdateTodo }) => {
	const todo = todos.find(({ id }) => todoId === id);
	if (!todo) {
		return <div>Not found!!!</div>;
	}
	return (
		<div>
			<pre>{JSON.stringify(todo, null, 2)}</pre>
			<Link to="/todos">Back</Link>
			<TodoForm
				initialValues={todo}
				onEditTodo={(todoId, values) => {
					handleUpdateTodo(todoId, values);
				}}
			/>
		</div>
	);
};

export default TodoDetailScreen;
