import React from 'react';
import { toRenderProps } from 'recompose';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import withCurrentTime from 'decorators/withCurrentTime';
import Todo from 'components/Todo';

import DashboardScreenQuery from './DashboardScreenQuery.gql';

const CurrentTime = toRenderProps(withCurrentTime);

const DashboardScreen = ({ todos, handleTodoCompleteChange }) => {
	return (
		<div>
			<Query query={DashboardScreenQuery} fetchPolicy="cache-and-network">
				{({ loading, data }) => {
					return <pre>{JSON.stringify({ loading, data }, null, 2)}</pre>;
				}}
			</Query>
			<Link to="/todos/new">Create Todo</Link>
			<h1>Todo</h1>
			<hr />
			{todos.filter(({ isCompleted }) => !isCompleted).map((todo) => {
				return (
					<Todo
						key={todo.id}
						{...todo}
						onTodoCompleteChange={(event) =>
							handleTodoCompleteChange(todo.id, event.currentTarget.checked)
						}
					/>
				);
			})}
			<hr />
			<hr />
			<h2>Completed</h2>
			<hr />
			{todos.filter(({ isCompleted }) => isCompleted).map((todo) => {
				return (
					<Todo
						key={todo.id}
						{...todo}
						onTodoCompleteChange={(event) =>
							handleTodoCompleteChange(todo.id, event.currentTarget.checked)
						}
					/>
				);
			})}
			<CurrentTime>
				{({ currentTime }) => {
					return <small>{format(currentTime, 'hh:mm:ss a')}</small>;
				}}
			</CurrentTime>
			<CurrentTime>
				{({ currentTime }) => {
					return <div>{format(currentTime, 'HH:mm A')}</div>;
				}}
			</CurrentTime>
		</div>
	);
};

export default DashboardScreen;
