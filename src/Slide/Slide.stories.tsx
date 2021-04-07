import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Slide } from './index';
import { ISlideProps } from './Types';

export default {
	title: 'Slide',
	component: Slide,
} as Meta;

const Template: Story<ISlideProps> = (args) => <Slide {...args} />;

const commonProps = {
	slideId: 'adada',
	slideImgUrl:
		'https://cdn.slidesharecdn.com/ss_thumbnails/byju-190810043929-thumbnail-4.jpg?cb=1565412070',
	slideNumber: 1,
	slideName: 'Test Slide Name',
	slideTimer: 180,
};

export const Basic = Template.bind({});
Basic.args = {
	...commonProps,
};

Basic.storyName = 'Primary';

export const newSlide = Template.bind({});
newSlide.args = {
	slideNumber: undefined,
	slideName: undefined,
	slideTimer: undefined,
};

newSlide.storyName = 'New Slide';
