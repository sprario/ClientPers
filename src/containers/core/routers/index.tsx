import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, Login, Profile } from '@/pages';
import InnerContent from './InnerContent';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import { Forms, Home, Orders } from '@/pages';
import Form from '@/pages/Forms/components/FormContainer';
import OrderContainer from '@/pages/Orders/components/OrderContainer';

const MainRoutes: FunctionComponent = () => (
	<Routes>
		<Route path="/" element={<ProtectedRoutes />}>
			<Route path="/" element={<InnerContent />}>
				<Route path="/" element={<Navigate replace to="dashboard" />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="" element={<Home />} />
					
					<Route path="forms" element={<Forms />}>
						<Route path=":id" element={<Form />} />
					</Route>
					
					<Route path="orders" element={<Orders />} >
						<Route path=":id" element={<OrderContainer />} />
					</Route>

					<Route path="profile" element={<Profile />} />
				</Route>
			</Route>
		</Route>

		<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>
	</Routes>
);

export default MainRoutes;
