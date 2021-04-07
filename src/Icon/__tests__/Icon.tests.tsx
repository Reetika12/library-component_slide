import * as React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Icon from '../index';

import { ReactComponent as PlayIcon } from '../StoryAssets/Cast_icon_normal.svg';
import { ReactComponent as PlayIconActive } from '../StoryAssets/Cast_icon_active.svg';

import { ReactComponent as ZoomIcon } from '../StoryAssets/ZOOMLENCE_ICON.svg';

import { ReactComponent as SlideDeteleteIconHover } from '../StoryAssets/IC_DELETE_WHITEBOARD_HOVER.svg';

describe('Icon', function test() {
	it('should render correctly', () => {
		const component = shallow(
			<Icon
				normalIcon={<PlayIcon />}
				hoverIcon={<ZoomIcon />}
				activeIcon={<PlayIconActive />}
				activeHoverIcon={<SlideDeteleteIconHover />}
				isActive={false}
				clickable
			/>
		);

		expect(component).toMatchSnapshot();
	});

	it('should render correctly for tappable area', () => {
		const component = shallow(
			<Icon
				normalIcon={<PlayIcon />}
				hoverIcon={<ZoomIcon />}
				activeIcon={<PlayIconActive />}
				activeHoverIcon={<SlideDeteleteIconHover />}
				isActive={false}
				clickable
				containerStyle={{
					height: '100px',
					width: '100px',
				}}
				innerContainerStyle={{
					height: '24px',
					width: '24px',
				}}
			/>
		);

		expect(component).toMatchSnapshot();
	});
});
