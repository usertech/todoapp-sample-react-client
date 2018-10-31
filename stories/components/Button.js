import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import GlobalStyle from 'stylesheets/GlobalStyle';

storiesOf('Button')
	.add('basic button', () => {
		return <Button>Click me</Button>;
	})
	.add('buttons in a row', () => {
		return (
			<div>
				<GlobalStyle />
				<Button>Click me</Button>
				<Button isPrimary isLarge>
					Click me
				</Button>
				<Button isSecondary isSmall>
					Click me
				</Button>
				<Button as="a" href="#foo">
					Click me
				</Button>
				<Button as="span">Click me</Button>
			</div>
		);
	})
	.add('Button to ButtonLink comparison', () => {
		return (
			<div>
				<div>
					<Button>Click me</Button>
				</div>
				<div>
					<ButtonLink>Click me</ButtonLink>
				</div>
			</div>
		);
	});
