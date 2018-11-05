import React from 'react';
import { Route } from 'react-router-dom';
import TodoForm from 'forms/TodoForm';
import { Mutation } from 'react-apollo';

import CreateTodoMutation from './CreateTodoMutation.gql';

const CreateTodoScreen = () => {
	return (
		<Mutation mutation={CreateTodoMutation}>
			{(mutate, { loading }) => {
				return (
					<Route
						render={({ history: { push } }) => {
							return (
								<TodoForm
									onAddTodo={(todoData) => {
										mutate({ variables: { input: todoData } })
											.then(() => {
												push('/todos');
											})
											.catch((error) => {
												console.log(error);
												window.alert(error.message);
											});
									}}
									isBusy={loading}
								/>
							);
						}}
					/>
				);
			}}
		</Mutation>
	);
};

export default CreateTodoScreen;
