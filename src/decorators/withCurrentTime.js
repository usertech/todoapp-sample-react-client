import { compose, withStateHandlers, lifecycle } from 'recompose';

const withCurrentTime = compose(
	withStateHandlers(
		{
			intervalHandle: null,
			currentTime: new Date(),
		},
		{
			updateCurrentTime: () => () => {
				return { currentTime: new Date() };
			},
			captureTimerHandle: () => (intervalHandle) => {
				return { intervalHandle };
			},
		},
	),
	lifecycle({
		componentDidMount() {
			const { updateCurrentTime, captureTimerHandle } = this.props;
			const handle = window.setInterval(() => {
				updateCurrentTime();
			}, 1000);
			captureTimerHandle(handle);
		},
		componentWillUnmount() {
			const { intervalHandle } = this.props;
			window.clearInterval(intervalHandle);
		},
	}),
);

export default withCurrentTime;
