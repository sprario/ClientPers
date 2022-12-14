import React, { FunctionComponent } from 'react';

interface PanelProps {
	children: React.ReactNode;
}

const Panel: FunctionComponent<PanelProps> = ({ children }: PanelProps) => {
	return (
		<div className="tw-flex tw-justify-center tw-bg-gray-100 tw-w-11/12 tw-h-full tw-mb-10">
			<div className="tw-flex tw-min-[300px] tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-p-10 tw-justify-items-center tw-shadow-lg">
				{children}
			</div>
		</div>
	);
};

export default Panel;
