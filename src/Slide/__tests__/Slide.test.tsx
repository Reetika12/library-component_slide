import * as React from 'react';
// import { act } from 'react-dom/test-utils';
// import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Slide } from '../index';
import { noop } from '../../utils';

describe('Slide', function test() {
	it('should render correctly for cms', () => {
		const component = shallow(
			<Slide
				slideId="asd"
				slideImgUrl="https://www.asiatechdaily.com/wp-content/uploads/2020/01/Byjus-770x433.jpg"
				onSelectClick={noop}
				slideTimer={180}
				slideNumber={1}
				slideName="Live Quiz with large name going out"
			/>
		);

		expect(component).toMatchSnapshot();
	});

	it('should render new slide correctly for cms', () => {
		const component = shallow(
			<Slide
				slideId="asd"
				slideImgUrl="https://www.asiatechdaily.com/wp-content/uploads/2020/01/Byjus-770x433.jpg"
				onSelectClick={noop}
			/>
		);

		expect(component).toMatchSnapshot();
	});
});
