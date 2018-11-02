import React from 'react';
import { compose } from 'recompose';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import withTodos from 'decorators/withTodos';

import DashboardScreen from 'screens/DashboardScreen';
import CreateTodoScreen from 'screens/CreateTodoScreen';
import TodoDetailScreen from 'screens/TodoDetailScreen';

const withApp = compose(withTodos);
const renderApp = ({ todos, handleTodoCompleteChange, handleAddTodo, handleUpdateTodo }) => {
	const withTodosProps = { todos, handleTodoCompleteChange, handleAddTodo, handleUpdateTodo };
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route
						path="/todos"
						exact
						render={() => {
							return <DashboardScreen {...withTodosProps} />;
						}}
					/>
					<Route
						path="/todos/new"
						exact
						render={() => {
							return <CreateTodoScreen {...withTodosProps} />;
						}}
					/>
					<Route
						path="/todos/:todoId"
						exact
						render={({
							match: {
								params: { todoId },
							},
						}) => {
							return <TodoDetailScreen todoId={todoId} {...withTodosProps} />;
						}}
					/>
					<Redirect to="/todos" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

const App = withApp(renderApp);

export default App;
