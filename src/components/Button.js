import React from 'react';
import ButtonStyle from 'primitives/ButtonStyle';

const Button = (props) => <ButtonStyle {...props} />;

Button.defaultProps = {
	as: 'button',
};

export default Button;
