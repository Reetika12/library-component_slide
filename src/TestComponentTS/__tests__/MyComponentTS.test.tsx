import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { TestComponentTS } from '../index';

describe('MyComponentTS', function test() {
	it('should render correctly', () => {
		const component = shallow(<TestComponentTS title="1" />);

		expect(component).toMatchSnapshot();
	});

	it('should display title passed as props', function () {
		const title = 'hello';
		const container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			ReactDOM.render(<TestComponentTS title={title} />, container);
		});
		const header = container.querySelector('h1');
		expect(header?.textContent).toBe(title);
	});

	it('should display subtitle passed as props', function () {
		const title = 'hello';
		const subtitle = 'world';
		const container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			ReactDOM.render(<TestComponentTS title={title} subTitle={subtitle} />, container);
		});
		const header = container.querySelector('h2');
		expect(header?.textContent).toBe(subtitle);
	});
});
