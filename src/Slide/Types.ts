import React, { CSSProperties, ReactNode } from 'react';

export interface IIcons {
	playIcon: ReactNode;
	playIconHover: ReactNode;
	playIconActive: ReactNode;
}

export interface ISlideData {
	slideId: string;
	slideImgUrl?: string;
	slideNumber?: number;
	slideName?: string;
	slideTimer?: number;
	isActive?: boolean;
	isSelected?: boolean;
	isViewed?: boolean;
	isDeletable?: boolean;
}

export interface ISlideActions {
	onSelectClick: (slideInfo: Partial<ISlideData>) => void;
	onPlayPauseClick?: (slideInfo: Partial<ISlideData>) => void;
	onZoomClick?: (slideInfo: Partial<ISlideData>) => void;
	onDeleteClick?: (slideInfo: Partial<ISlideData>) => void;
}

export interface ISlideExtraProps {
	style?: CSSProperties;
	mode?: 'creator' | 'presenter';
	icons?: Partial<IIcons>;
	innerRef?: React.ForwardedRef<HTMLDivElement>;
}

export interface ISlideProps extends ISlideActions, ISlideExtraProps, ISlideData {}
