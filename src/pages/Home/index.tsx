import React, { FunctionComponent, useContext } from 'react';
import { PanelFit } from '@/components/Layout';
import TableForm from './components/Table';
import { getForms } from '@/services/forms';
import { UserContext } from '@/context';
import useQuery from '@/hooks/useQuery';
import Spinner from '@/components/Layout/Spinner';

const Home: FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);

	const formQuery = useQuery(() => getForms(userProfile?.id), { staleTime: 60000, cacheTime: 60000 });
	
	const { data, isLoading, isSuccess } = formQuery;

	const tableData = data?.slice( 0, 5) || [];

	console.log(tableData);


	return (
		<div className='flex flex-row w-full'>
			<Spinner isfullPage={false} loading={isLoading} />
			<PanelFit title='Formularios'>  
				{isSuccess	&&	<TableForm data={tableData}/>}
			</PanelFit>
			<PanelFit title='Ordenes de Trabajo'>
				Ultimas 5 Ordenes
				{/* <Table /> */}
			</PanelFit>
		</div>
	);
};

export default Home;
