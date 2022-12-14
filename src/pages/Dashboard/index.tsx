import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
// import { Card } from '../../components';

// TODO: Hacer un componente llamado Panel que englobe a Oulet
// TODO: Hacer componente de Breadcrumbs
// TODO: Hacer componente de Footer
// TODO: Tiene una ruta por defecto
const Dashboard: FunctionComponent = () => {
	return (
		<div className="tw-flex tw-w-full tw-flex-wrap tw-h-screen tw-justify-center">
			<Header />
			<div className="tw-w-11/12 tw-h-8 tw-mt-5 tw-justify-center tw-mb-5">
				{'Inicio > Breadcrumbs'}
			</div>
			<div className="tw-flex tw-justify-center tw-bg-gray-100 tw-w-11/12 tw-h-full tw-mb-10">
				<div className="tw-flex tw-min-[300px] tw-w-full tw-border tw-border-gray-300 tw-rounded-md tw-p-10 tw-justify-items-center tw-shadow-lg">
					<Outlet />
				</div>
			</div>
			<div className="tw-flex tw-w-full tw-p-10 tw-border tw-justify-items-center tw-h-10 tw-rounded-t-md">
				acá iria el footer, se puede poner version etc
			</div>
		</div>
	);
};

export default Dashboard;
