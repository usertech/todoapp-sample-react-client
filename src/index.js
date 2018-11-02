import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderToRoot = (App) => render(<App />, document.getElementById('root'));

renderToRoot(App);
// eslint-disable-next-line no-undef
// if (module.hot) {
// 	// eslint-disable-next-line no-undef
// 	module.hot.accept('./App', () => {
// 		renderToRoot(App);
// 	});
// }
