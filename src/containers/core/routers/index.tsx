
import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"

import { Dashboard ,Login } from "../../../pages"

import InnerContent from './InnerContent'
import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoutes from "./PublicRoutes"
import PermissionDenied from "./PermissionDenied"

const MainRoutes = () => (
	<Routes>
		<Route path="/" element={<ProtectedRoutes />}>
			<Route path="/" element={<InnerContent />}>
				<Route path="/" element={<Navigate replace to="dashboard" />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Route>
		</Route>

		<Route path="login" element={<PublicRoutes />}>
			<Route path="/login" element={<Login />} />
		</Route>

		<Route path="/denied" element={<PermissionDenied />} />
	</Routes>
)

export default MainRoutes