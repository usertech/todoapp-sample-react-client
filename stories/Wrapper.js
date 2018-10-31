import React, { Fragment } from 'react';
import GlobalStyle from 'stylesheets/GlobalStyle';

const Wrapper = (story) => {
	return (
		<Fragment>
			<GlobalStyle />
			{story()}
		</Fragment>
	);
};

export default Wrapper;
