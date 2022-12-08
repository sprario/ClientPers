import React, { FunctionComponent } from 'react';
import Header from './components/Header';

interface DashboardProps {
  prop: string;
}

const Dashboard: FunctionComponent = () => {


    return (
        <div className='flex-col '>
            <Header />
        </div>
    );
};

export default Dashboard;
