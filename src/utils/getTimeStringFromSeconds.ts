export default function getTimeStringFromSeconds(value: number): string {
	if (typeof value !== 'number') {
		return '';
	}

	let timeText = '';
	let time = value;

	if (value === 0) {
		return '0 Sec';
	}

	if (Math.floor(time / 3600) !== 0) {
		timeText += `${Math.floor(time / 3600)} Hr`;
		time %= 3600;
	}

	if (Math.floor(time / 60) !== 0) {
		if (timeText) {
			timeText += ' ';
		}
		timeText += `${Math.floor(time / 60)} Min`;
		time %= 60;
	}

	if (time) {
		if (timeText) {
			timeText += ' ';
		}
		timeText += `${time} Sec`;
	}

	return timeText;
}
