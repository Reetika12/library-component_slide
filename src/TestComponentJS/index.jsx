import React from 'react';
import './style.css';

export default function TestComponentJS(props) {
	const { title } = props;
	return (
		<div className="test-component-js">
			<h1>{title}</h1>
			<p>This is an example component.</p>
		</div>
	);
}
