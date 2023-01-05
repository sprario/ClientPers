import React, { FunctionComponent, useContext, useEffect } from 'react';
import { PanelFit } from '@/components/Layout';
import TableHome from './components/TableHome';
import { getForms } from '@/services/forms';
import { UserContext } from '@/context';
import useQuery from '@/hooks/useQuery';
import Spinner from '@/components/Layout/Spinner';
import { getOrders } from '@/services/orders';

const Home: FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);
	const formQuery = useQuery(() => getForms(userProfile?._id), { enabled: false });
	const orderQuery = useQuery(() => getOrders(userProfile?._id), { enabled: false });

	useEffect(() => {
    if (userProfile) {
      formQuery.refetch();
			orderQuery.refetch();
    }
  }, [userProfile]);

	

	const arraySorted = formQuery.data?.data.sort((a, b) => {
			var keyA = new Date(a.created),
			keyB = new Date(b.created);

			if (keyA < keyB) return -1;
			if (keyA > keyB) return 1;
			return 0;
	})


	return (
		<div className='flex flex-row w-full'>
			<Spinner isfullPage={false} loading={formQuery.isLoading || orderQuery.isLoading} />
			<PanelFit title='Formularios'>  
				{formQuery.isSuccess	&&	<TableHome type='forms' data={arraySorted}/>}
			</PanelFit>
			{/* <PanelFit title='Ordenes de Trabajo'>
				{orderQuery.isSuccess &&  <TableHome type='orders' data={tableOrderData}/>}
			</PanelFit> */}
		</div>
	);
};

export default Home;
