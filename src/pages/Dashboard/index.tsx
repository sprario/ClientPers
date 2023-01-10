import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Panel, PanelFit, SideBar } from '@/components/Layout';
import { routes as RoutesSideBar } from '@/constants/routes';
import { UserContext } from '@/context/UserContext';

const Dashboard: FunctionComponent = () => {
  const { userProfile } = useContext(UserContext);

  useEffect(() => {
    if (userProfile) {
      // hacer algo con el userProfile
    }
  }, [userProfile]);

  return (
    <div className="text-blueGray-700 antialiased h-full">
      <div id="root">
        <SideBar routes={RoutesSideBar[userProfile?.role || 'admin']} />
        <div className="relative md:ml-64 bg-blueGray-50 h-screen">       
          <div className="relative bg-[#3373B5]  md:pt-32 pb-32 pt-12">
            <Header />
          </div>
          <div className="px-4 md:px-10 h-full mx-auto w-full -m-24">
            <Panel className='min-h-800'> 
              <Outlet />
            </Panel>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
