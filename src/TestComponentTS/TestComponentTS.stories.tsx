import React from 'react';
import { Meta } from '@storybook/react';

import { TestComponentTS } from './index';

export default {
	title: 'Example/TestComponentTS',
	component: TestComponentTS,
} as Meta;

export const Primary: React.VFC<unknown> = () => <TestComponentTS title="Hello" />;
