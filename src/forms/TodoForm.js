import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from 'components/Button';
import DatePicker from 'form-controls/DatePicker';
import { assemble, isRequired, validator, chain } from 'simple-object-validation';
import { isAfter, isDate, endOfDay, startOfDay, isBefore, addDays } from 'date-fns';

const isDateInFuture = validator(
	(value) => {
		return !isDate(value) || isAfter(endOfDay(value), startOfDay(new Date()));
	},
	(param, name) => `${name} has to be in future`,
);

const thereIsEnoughTimeForThat = validator(
	(value, param, { dueAt, estimatedDuration }) => {
		return (
			!isDate(dueAt) || !estimatedDuration || isBefore(addDays(value, estimatedDuration), dueAt)
		);
	},
	() => `There is not enough time for that`,
);

const validateFormData = assemble({
	title: isRequired('Title'),
	description: isRequired('Description'),
	dueAt: chain([isRequired, isDateInFuture])('Due date'),
	scheduledAt: thereIsEnoughTimeForThat('Scheduled at'),
});

const TodoForm = ({ onAddTodo: handleAddTodo, onEditTodo: handleEditTodo, initialValues }) => {
	return (
		<Form
			onSubmit={(values, { reset }) => {
				if (values.id) {
					// edit
					handleEditTodo(values.id, values);
				} else {
					// add
					reset();
					handleAddTodo(values);
				}
			}}
			validate={validateFormData}
			initialValues={initialValues}
		>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Field name="title">
						{({ input, meta: { error, submitFailed } }) => {
							return (
								<div>
									<label>
										<div>Title</div>
										<input {...input} />
										{!!error && submitFailed && <pre>{JSON.stringify(error)}</pre>}
									</label>
								</div>
							);
						}}
					</Field>
					<Field name="description">
						{({ input, meta: { error, submitFailed } }) => {
							return (
								<div>
									<label>
										<div>Description</div>
										<textarea {...input} />
										{!!error && submitFailed && <pre>{JSON.stringify(error)}</pre>}
									</label>
								</div>
							);
						}}
					</Field>
					<Field name="dueAt">
						{({ input, meta: { error, submitFailed } }) => {
							return (
								<div>
									<label>Due date</label>
									<div>
										<DatePicker {...input} />
									</div>
									<div>{!!error && submitFailed && <pre>{JSON.stringify(error)}</pre>}</div>
								</div>
							);
						}}
					</Field>
					<Field name="scheduledAt">
						{({ input, meta: { error, submitFailed } }) => {
							return (
								<div>
									<label>Scheduled at</label>
									<div>
										<DatePicker {...input} />
									</div>
									<div>{!!error && submitFailed && <pre>{JSON.stringify(error)}</pre>}</div>
								</div>
							);
						}}
					</Field>
					<Field name="estimatedDuration">
						{({ input, meta: { error, submitFailed } }) => {
							return (
								<div>
									<label>Estimated Duration</label>
									<div>
										<input type="number" {...input} />
									</div>
									<div>{!!error && submitFailed && <pre>{JSON.stringify(error)}</pre>}</div>
								</div>
							);
						}}
					</Field>
					<div>
						<Button>Create Todo</Button>
					</div>
				</form>
			)}
		</Form>
	);
};

export default TodoForm;
