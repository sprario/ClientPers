import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Panel } from './components';

// TODO: Hacer componente de Breadcrumbs
// TODO: Tiene una ruta por defecto
const Dashboard: FunctionComponent = () => {
	return (
		<div className="tw-flex tw-w-full tw-flex-wrap tw-h-screen tw-justify-center">
			<Header />
			<div className="tw-w-11/12 tw-h-8 tw-mt-5 tw-justify-center tw-mb-5">
				{'Inicio > Breadcrumbs'}
			</div>
			<Panel>
				<Outlet />
			</Panel>
			<Footer />
		</div>
	);
};

export default Dashboard;
