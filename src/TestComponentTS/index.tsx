import React from 'react';
import './styles.scss';

export interface ITestComponentTSProps {
	title: string;
	subTitle?: string;
}

export function TestComponentTS(props: ITestComponentTSProps): JSX.Element {
	const { title, subTitle } = props;
	return (
		<div className="test-component-ts">
			<h1>{title}</h1>
			<h2>{subTitle}</h2>
			<p>This is an e1xample component of Typescript component</p>
		</div>
	);
}

TestComponentTS.defaultProps = {
	subTitle: 'World',
};
