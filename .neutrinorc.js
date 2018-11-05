module.exports = {
	use: [
		[
			'@neutrinojs/react',
			{
				hot: false,
				html: {
					title: 'my app',
					links: [
						{
							href: 'https://fonts.googleapis.com/css?family=Muli:400,700,800',
							rel: 'stylesheet',
						},
					],
				},
			},
		],
		'@usertech/neutrino-preset-eslint-prettier',
		(neutrino) => neutrino.config.resolve.modules.add(neutrino.options.source),
		'@usertech/neutrino-preset-react-storybook',
		(neutrino) => neutrino.config.output.publicPath('/'),
		(neutrino) => {
			neutrino.config.module
				.rule('graphql')
				.test(/\.(graphqls?|gql)$/)
				.include.add(/src/)
				.end()
				.use('graphql')
				.loader('graphql-tag/loader')
				.end()
				.end()
				.end();
		},
	],
};
