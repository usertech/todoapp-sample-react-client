import React from 'react';
import TodoForm from 'forms/TodoForm';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';
import omit from 'lodash.omit';

import TodoDetailScreenQuery from './TodoDetailScreenQuery.gql';
import UpdateTodoMutation from './UpdateTodoMutation.gql';

const TodoDetailScreen = ({ todoId }) => {
	return (
		<div>
			<Mutation mutation={UpdateTodoMutation}>
				{(mutate) => {
					return (
						<Query query={TodoDetailScreenQuery} variables={{ todoId }}>
							{({ loading, data: { todo } = {} }) => {
								if (loading) {
									return <div>loading...</div>;
								}
								return (
									<div>
										<pre>{JSON.stringify(todo, null, 2)}</pre>
										<Link to="/todos">Back</Link>
										<TodoForm
											initialValues={todo}
											onEditTodo={(todoId, values) => {
												mutate({ variables: { todoId, input: omit(values, ['id', '__typename']) } })
													.then(() => {
														window.alert('Success!');
													})
													.catch((error) => {
														console.log(error);
														window.alert(error.message);
													});
											}}
										/>
									</div>
								);
							}}
						</Query>
					);
				}}
			</Mutation>
		</div>
	);
};

export default TodoDetailScreen;
