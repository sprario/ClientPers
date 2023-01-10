import React, { FunctionComponent, useContext, useEffect } from 'react';
import useQuery from '../../../../hooks/useQuery';
import { useParams } from 'react-router-dom';
import { UserContext } from '@/context';
import FieldContainer from '../FieldContainer';
import Spinner from '@/components/Layout/Spinner';
import { getOrderWithId } from '@/services/orders';
import { formatStatus } from '@/utils/formatters/status';

const OrderContainer: FunctionComponent =  () => {
	const { id } = useParams();
	const { userProfile } = useContext(UserContext);

	const { data, isLoading, isRefetching, refetch } = useQuery(() => getOrderWithId(userProfile?._id, id), { staleTime: 60000, cacheTime: 60000 });

	const color = formatStatus(data?.state);

	useEffect(() => {
		refetch()
	}, [id]);


	return (
		<div className='flex flex-col w-full shadow border-l-stone-800 px-4' >
			{isLoading || isRefetching && <Spinner isfullPage={false} loading={true} size='small' />}
			<div className={`bg-full bg-no-repeat bg-${color} pl-4`}>
			  <h2 className='text-blueGray-800 text-sm uppercase font-bold block pt-1 no-underline'>
					Orden de Trabajo nro. {id}
				</h2>
				<div>
					<h4 className='text-blueGray-800 text-sm uppercase font-bold block pt-1 py-2 no-underline'>
						Estado: {data?.state}
					</h4>
				</div>
			</div>
			<div className='w-full px-4'>
				<h4 className='text-black text-sm uppercase font-bold block pt-1 py-2 no-underline'>
					Instrucciones
				</h4>
			{data &&
				data.instructionsFields.map(field => (
				  <FieldContainer key={field.id+'instructions'} {...field} />
				))}
			</div>
			<div className='w-full px-4'>
				<h4 className='text-black text-sm uppercase font-bold block pt-1 py-2 no-underline'>
					Resultados
				</h4>
			{data &&
				data.resultsFields.map(field => (
				  <FieldContainer key={field.id+'results'} {...field} />
				))}
			</div>
		</div>
	);
};

export default OrderContainer;
