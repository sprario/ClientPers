import React, { FunctionComponent, useContext } from 'react';
import { PanelFit } from '@/components/Layout';
import TableHome from './components/TableHome';
import { getForms } from '@/services/forms';
import { UserContext } from '@/context';
import useQuery from '@/hooks/useQuery';
import Spinner from '@/components/Layout/Spinner';
import { getOrders } from '@/services/orders';

const Home: FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);

	const formQuery = useQuery(() => getForms(userProfile?._id), { staleTime: 60000, cacheTime: 60000 });
	const orderQuery = useQuery(() => getOrders(userProfile?._id), { staleTime: 60000, cacheTime: 60000 });


	return (
		<div className='flex flex-row w-full'>
			<Spinner isfullPage={false} loading={formQuery.isLoading || orderQuery.isLoading} />
			<PanelFit title='Formularios'>  
				{formQuery.isSuccess	&&	<TableHome type='forms' data={formQuery.data.data}/>}
			</PanelFit>
			{/* <PanelFit title='Ordenes de Trabajo'>
				{orderQuery.isSuccess &&  <TableHome type='orders' data={tableOrderData}/>}
			</PanelFit> */}
		</div>
	);
};

export default Home;
