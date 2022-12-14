import React, { FunctionComponent } from 'react';

interface CardProps {
	children: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ children }) => {
	return (
		<div className="tw-relative tw-flex tw-flex-col tw-justify-center tw-min-h-screen tw-overflow-hidden">
			<div className="tw-w-full tw-p-6 tw-m-auto tw-bg-white tw-rounded-md tw-shadow-xl lg:tw-max-w-xl">
				{children}
			</div>
		</div>
	);
};

export type { CardProps };
export default Card;
