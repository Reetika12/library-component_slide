import getTimeStringFromSeconds from '../getTimeStringFromSeconds';

describe('getTimeStringFromSeconds', function test() {
	it('works for numbers', () => {
		expect(getTimeStringFromSeconds(0)).toBe('0 Sec');
		expect(getTimeStringFromSeconds(10)).toBe('10 Sec');
		expect(getTimeStringFromSeconds(10)).toBe('10 Sec');
		expect(getTimeStringFromSeconds(59)).toBe('59 Sec');
		expect(getTimeStringFromSeconds(60)).toBe('1 Min');
		expect(getTimeStringFromSeconds(61)).toBe('1 Min 1 Sec');
		expect(getTimeStringFromSeconds(3599)).toBe('59 Min 59 Sec');
		expect(getTimeStringFromSeconds(3600)).toBe('1 Hr');
		expect(getTimeStringFromSeconds(3601)).toBe('1 Hr 1 Sec');
		expect(getTimeStringFromSeconds(3660)).toBe('1 Hr 1 Min');
		expect(getTimeStringFromSeconds(3661)).toBe('1 Hr 1 Min 1 Sec');
	});

	it('handles other values correctly', () => {
		expect(getTimeStringFromSeconds(null)).toBe('');
		expect(getTimeStringFromSeconds(false)).toBe('');
		expect(getTimeStringFromSeconds('sas')).toBe('');
		expect(getTimeStringFromSeconds(undefined)).toBe('');
		expect(getTimeStringFromSeconds([])).toBe('');
		expect(getTimeStringFromSeconds({})).toBe('');
	});
});
