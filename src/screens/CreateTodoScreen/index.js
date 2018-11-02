import React from 'react';
import { Route } from 'react-router-dom';
import TodoForm from 'forms/TodoForm';

const CreateTodoScreen = ({ handleAddTodo }) => {
	return (
		<Route
			render={({ history: { push } }) => {
				return (
					<TodoForm
						onAddTodo={(todoData) => {
							handleAddTodo(todoData);
							push('/todos');
						}}
					/>
				);
			}}
		/>
	);
};

export default CreateTodoScreen;
