import React from 'react';
import ButtonStyle from 'primitives/ButtonStyle';

const ButtonLink = (props) => <ButtonStyle {...props} />;

ButtonLink.defaultProps = {
	as: 'a',
};

export default ButtonLink;
