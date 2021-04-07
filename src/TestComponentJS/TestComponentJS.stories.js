import React from 'react';

import TestComponentJS from './index';

export default {
	title: 'Example/TestComponentJS',
	component: TestComponentJS,
};

export const Primary = () => <TestComponentJS title="Hello" />;
