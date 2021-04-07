import React, { CSSProperties, ReactNode, useState } from 'react';

import './icon.scss';

export interface IIconProps {
	normalIcon: ReactNode;
	hoverIcon?: ReactNode;
	activeIcon?: ReactNode;
	activeHoverIcon?: ReactNode;
	isActive?: boolean;
	clickable?: boolean;
	containerStyle?: CSSProperties;
	innerContainerStyle?: CSSProperties;
	innerContainerStyleHover?: CSSProperties;
	innerContainerStyleActive?: CSSProperties;
	innerContainerStyleActiveHover?: CSSProperties;
	onClick?: (e: React.SyntheticEvent) => void;
}

export default function Icon(props: IIconProps): JSX.Element {
	const {
		normalIcon,
		hoverIcon,
		activeIcon,
		isActive,
		activeHoverIcon,
		containerStyle,
		innerContainerStyle,
		innerContainerStyleHover,
		innerContainerStyleActive,
		innerContainerStyleActiveHover,
		clickable,
		onClick,
	} = props;
	const [isHover, setIsHover] = useState(false);

	const hoverFinal = hoverIcon || normalIcon;
	const activeHoverFinal = activeHoverIcon || activeIcon;

	const containerStyleDefault: CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		position: 'relative',
		height: '40px',
		width: '40px',
	};

	if (clickable) {
		containerStyleDefault.cursor = 'pointer';
	}

	const innerContainerStyleDefault: CSSProperties = {};

	const containerStyleFinal = { ...containerStyleDefault, ...containerStyle };
	let innerContainerStyleFinal = { ...innerContainerStyleDefault, ...innerContainerStyle };

	if (isHover) {
		innerContainerStyleFinal = { ...innerContainerStyle, ...innerContainerStyleHover };
	}

	if (isActive) {
		innerContainerStyleFinal = { ...innerContainerStyle, ...innerContainerStyleActive };
	}

	if (isActive && isHover) {
		innerContainerStyleFinal = {
			...innerContainerStyle,
			...innerContainerStyleActiveHover,
		};
	}

	return (
		<div
			style={containerStyleFinal}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={onClick}
			className="icon"
		>
			<div style={{ top: 0, left: 0, zIndex: 1, position: 'absolute' }}>
				{!isHover && !isActive && normalIcon}
				{isHover && !isActive && hoverFinal}
				{!isHover && isActive && activeIcon}
				{isHover && isActive && activeHoverFinal}
			</div>
			<div style={innerContainerStyleFinal} />
		</div>
	);
}
