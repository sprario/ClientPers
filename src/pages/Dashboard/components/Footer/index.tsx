import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
	return (
		<section className="tw-w-full tw-bg-blue-700 tw-sm:pt-16 tw-lg:pt-24">
			<div className="tw-flex tw-justify-between tw-px-10 tw-py-4">
				<p className="tw-mt-6 tw-text-sm tw-text-blue-200 tw-lg:mt-0">
					Version 1.0.0
				</p>
				<p className="tw-mt-6 tw-text-sm tw-text-blue-200 tw-lg:mt-0">
					© Copyright 2022, All Rights Reserved by Persoft
				</p>
			</div>
		</section>
	);
};

export default Footer;
