import * as React from 'react';
import { act } from 'react-dom/test-utils';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MyComponent from '../index';

describe('MyComponent', function test() {
	it('should render correctly', () => {
		const component = shallow(<MyComponent title="1" />);

		expect(component).toMatchSnapshot();
	});

	it('should display title passed as props', function () {
		const title = 'hello';
		const container = document.createElement('div');
		document.body.appendChild(container);
		act(() => {
			ReactDOM.render(<MyComponent title={title} />, container);
		});
		const header = container.querySelector('h1');
		expect(header?.textContent).toBe(title);
	});
});
