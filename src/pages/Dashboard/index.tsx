import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

interface DashboardProps {
  prop: string;
}

const Dashboard: FunctionComponent = () => {


    return (
        <div className='flex-col '>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
