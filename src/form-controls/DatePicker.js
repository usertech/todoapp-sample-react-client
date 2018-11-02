import React from 'react';
import { compose, withProps, withHandlers, withState } from 'recompose';
import { format, parse } from 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
});
const dateFormat = 'YYYY-MM-DD';
const DatePicker = compose(
	withStyles(styles),
	withState('internalValue', 'setInternalValue', ({ value }) => format(value, dateFormat)),
	withProps(({ value }) => {
		return {
			value: value ? format(value, dateFormat) : '',
		};
	}),
	withHandlers({
		onChange: ({ onChange, setInternalValue }) => (event) => {
			const value = event.currentTarget.value;
			if (value) {
				const pv = parse(value, dateFormat);
				onChange(pv);
				setInternalValue(value);
			}
		},
	}),
)((
	{ classes, internalValue, setInternalValue, ...input }, // eslint-disable-line
) => (
	<TextField
		type="date"
		className={classes.textField}
		InputLabelProps={{
			shrink: true,
		}}
		{...input}
		value={internalValue}
	/>
));

export default DatePicker;
