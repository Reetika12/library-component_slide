module.exports = {
	roots: ['<rootDir>/src'],
	preset: 'ts-jest',
	globals: {
		'ts-jest': {
			diagnostics: true,
		},
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/config/jest/__mocks__/styleMock.js',
		'\\.(gif|ttf|eot)$': '<rootDir>/config/jest/__mocks__/fileMock.js',
		'\\.svg': '<rootDir>//config/jest/__mocks__/svgrMock.js',
	},
	setupFiles: ['./config/jest/setupJest.ts', './config/jest/setupEnzyme.ts'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx|ts|tsx)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
};
