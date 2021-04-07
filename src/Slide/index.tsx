import React from 'react';
import clsx from 'clsx';

import Icon from '../Icon';
import { getTimeStringFromSeconds } from '../utils';

import { IIcons, ISlideProps } from './Types';

import { ReactComponent as PlayIcon } from './Assets/Cast_icon_normal.svg';
import { ReactComponent as PlayIconHover } from './Assets/Cast_icon_hover.svg';
import { ReactComponent as PlayIconActive } from './Assets/Cast_icon_active.svg';

import { ReactComponent as ZoomIcon } from './Assets/ZOOMLENCE_ICON.svg';
import { ReactComponent as ZoomIconHover } from './Assets/ZOOMLENCE_ICON_HOVER.svg';

import { ReactComponent as SlidePresentedIcon } from './Assets/IC_Slide_Presented.svg';

import { ReactComponent as SlideDeteleteIconHover } from './Assets/IC_DELETE_WHITEBOARD_HOVER.svg';
import { ReactComponent as SlideDeteleteIcon } from './Assets/IC_DELETE_WHITEBOARD_NORMAL.svg';

import './slide.scss';

export function Slide(props: ISlideProps): JSX.Element {
	const {
		style,
		slideId,
		slideImgUrl,
		slideNumber,
		slideName,
		slideTimer,
		isActive,
		mode,
		isSelected,
		isViewed,
		isDeletable,
		icons,
		onSelectClick,
		onPlayPauseClick,
		onZoomClick,
		onDeleteClick,
		innerRef,
	} = props;

	const defaultIcons: IIcons = {
		playIcon: <PlayIcon />,
		playIconHover: <PlayIconHover />,
		playIconActive: <PlayIconActive />,
	};

	const slideObj = {
		slideId,
		slideImgUrl,
		slideNumber,
		slideName,
		slideTimer,
		isActive,
		mode,
		isViewed,
	};

	let defaultStyle = {};
	if (mode === 'creator') {
		defaultStyle = {
			height: ' 124px',
			width: '176px',
		};
	} else {
		defaultStyle = {
			height: '124px',
			width: '192px',
		};
	}

	const iconsFinal = { ...defaultIcons, ...icons };

	return (
		<div
			className={clsx('slide ', {
				'slide--mode-presenter': mode === 'presenter',
				'slide--active': isActive,
				'slide--selected': isSelected,
			})}
			style={{ ...defaultStyle, ...style }}
			onClick={() => onSelectClick && onSelectClick(slideObj)}
			ref={innerRef}
		>
			<div className="slide__img_box">
				<div className="slide__img">{slideImgUrl && <img src={slideImgUrl} alt="slide" />}</div>
				{mode === 'presenter' && (
					<>
						<div className="slide__actions_wrapper">
							<div className="slide__viewed_action_icon">
								{isViewed && (
									<Icon
										normalIcon={<SlidePresentedIcon />}
										containerStyle={{ height: '16px', width: '16px' }}
									/>
								)}
							</div>
							<div
								onClick={(e) => {
									if (onPlayPauseClick) {
										e.stopPropagation();
										onPlayPauseClick(slideObj);
									}
								}}
							>
								<Icon
									normalIcon={iconsFinal.playIcon}
									activeIcon={iconsFinal.playIconActive}
									hoverIcon={iconsFinal.playIconHover}
									isActive={isActive}
									clickable
								/>
							</div>
						</div>
						<div
							className="slide__zoom_action_icon"
							onClick={(e) => {
								if (onZoomClick) {
									e.stopPropagation();
									onZoomClick(slideObj);
								}
							}}
						>
							<Icon
								normalIcon={<ZoomIcon />}
								hoverIcon={<ZoomIconHover />}
								innerContainerStyle={{
									height: '24px',
									width: '24px',
									backgroundColor: 'rgba(57, 57, 57, .8)',
									borderRadius: '4px',
								}}
								innerContainerStyleHover={{
									backgroundColor: 'rgba(0, 0, 0, .8)',
								}}
								clickable
							/>
						</div>
					</>
				)}
			</div>
			<div className="slide__content_box">
				{slideNumber && (
					<div className="slide__slide_number">{String(slideNumber).padStart(2, '0')}</div>
				)}
				<div className="slide__slide_name">{slideName}</div>
				<div className="slide__slide_left_content">
					{slideTimer && (
						<div className="slide__slide_timer">{getTimeStringFromSeconds(slideTimer)}</div>
					)}
					{isDeletable && (
						<Icon
							normalIcon={<SlideDeteleteIcon />}
							hoverIcon={<SlideDeteleteIconHover />}
							containerStyle={{
								height: '24px',
								width: '24px',
							}}
							clickable
							onClick={(e) => {
								if (onDeleteClick) {
									e.stopPropagation();
									onDeleteClick(slideObj);
								}
							}}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

Slide.defaultProps = {
	style: {},
	slideNumber: null,
	slideName: 'New Slide',
	slideTimer: null,
	isActive: false,
	isSelected: false,
	isDeletable: false,
	mode: 'creator',
	slideImgUrl: null,
	icons: {},
};

const SlideWithRef = React.forwardRef<HTMLDivElement, ISlideProps>((props, ref) => (
	<Slide innerRef={ref} {...props} />
));

export default SlideWithRef;
