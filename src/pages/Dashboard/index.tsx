import React, { FunctionComponent, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Panel, PanelFit, SideBar } from '@/components/Layout';
import { routes as RoutesSideBar } from '@/constants/routes';
import { UserContext } from '@/context/UserContext';

// TODO: Hacer un componente llamado Panel que englobe a Oulet
// TODO: Hacer componente de Breadcrumbs
// TODO: Hacer componente de Footer
// TODO: Tiene una ruta por defecto
const Dashboard: FunctionComponent = () => {
  const { userProfile } = useContext(UserContext);
  return (
    <div className="text-blueGray-700 antialiased">
      <div id="root">
        <SideBar routes={RoutesSideBar[userProfile?.role]} />
        <div className="relative md:ml-64  bg-blueGray-50">       
          <div className="relative bg-gray-100 md:pt-32 pb-32 pt-12">
            <Header />
          </div>
          <div className="px-4  border-black md:px-10 min-h-800 min-h-full mx-auto w-full -m-24">
            <Panel > 
              <Outlet />
            </Panel>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
