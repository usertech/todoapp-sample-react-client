import { withStateHandlers } from 'recompose';

const withTodos = withStateHandlers(
	{
		todos: [
			{
				id: '1',
				title: 'Buy groceries',
				description: 'some description',
				dueAt: new Date(),
				isCompleted: false,
			},
			{
				id: '2',
				title: 'Trump rally today!!!1',
				description: 'yayy',
				dueAt: new Date(),
				isCompleted: false,
			},
			{
				id: '3',
				title: 'Walk dog',
				description: 'yayy',
				dueAt: new Date(),
				isCompleted: true,
			},
		],
	},
	{
		handleTodoCompleteChange: ({ todos }) => (todoId, isChecked) => {
			const todo = todos.find(({ id }) => id === todoId);
			todo.isCompleted = isChecked;
			return { todos };
		},
		handleAddTodo: ({ todos }) => (todoData) => {
			todos.unshift({ id: `${Math.random()}`, ...todoData });
			return { todos };
		},
		handleUpdateTodo: ({ todos }) => (todoId, todoData) => {
			const todoIndex = todos.findIndex(({ id }) => id === todoId);
			if (typeof todoIndex !== 'undefined') {
				todos[todoIndex] = todoData;
			}
			return { todos };
		},
	},
);

export default withTodos;
