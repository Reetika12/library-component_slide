import React from 'react';
import { Story, Meta } from '@storybook/react';

import Icon, { IIconProps } from './index';

import { ReactComponent as PlayIcon } from './StoryAssets/Cast_icon_normal.svg';
import { ReactComponent as PlayIconActive } from './StoryAssets/Cast_icon_active.svg';

import { ReactComponent as ZoomIcon } from './StoryAssets/ZOOMLENCE_ICON.svg';
import { ReactComponent as ZoomIconHover } from './StoryAssets/ZOOMLENCE_ICON_HOVER.svg';

import { ReactComponent as SlideDeteleteIconHover } from './StoryAssets/IC_DELETE_WHITEBOARD_HOVER.svg';

export default {
	title: 'Icon',
	component: Icon,
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

const commonProps = {
	normalIcon: <PlayIcon />,
	hoverIcon: <ZoomIcon />,
	activeIcon: <PlayIconActive />,
	activeHoverIcon: <SlideDeteleteIconHover />,
	isActive: false,
	clickable: true,
};

export const Basic = Template.bind({});
Basic.args = {
	...commonProps,
};

Basic.storyName = 'Basic';

export const newSlide = Template.bind({});
newSlide.args = {
	normalIcon: <ZoomIcon />,
	hoverIcon: <ZoomIconHover />,
	containerStyle: {
		backgroundColor: '#fff',
		height: '40px',
		width: '40px',
	},
	innerContainerStyle: {
		height: '24px',
		width: '24px',
		backgroundColor: 'rgba(57, 57, 57, .8)',
		borderRadius: '4px',
	},
	innerContainerStyleHover: {
		backgroundColor: 'rgba(0, 0, 0, .8)',
	},
	clickable: true,
};

newSlide.storyName = 'Icon with tappable area';
