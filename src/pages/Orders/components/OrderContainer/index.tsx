import React, { FunctionComponent, useContext, useEffect } from 'react';
import useQuery from '../../../../hooks/useQuery';
import { useParams } from 'react-router-dom';
import { UserContext } from '@/context';
import FieldContainer from '../FieldContainer';
import Spinner from '@/components/Layout/Spinner';
import { getOrderWithId } from '@/services/orders';

const OrderContainer: FunctionComponent =  () => {
	const { id } = useParams();
	const { userProfile } = useContext(UserContext);

	const { data, isLoading, isRefetching, refetch } = useQuery(() => getOrderWithId(userProfile?._id, id), { staleTime: 60000, cacheTime: 60000 });

	useEffect(() => {
		refetch()
	}, [id]);


	return (
		<div className='flex flex-col w-full shadow border-l-stone-800 px-4' >
			{isLoading || isRefetching && <Spinner isfullPage={false} loading={true} size='small' />}
			<div className=''>
			  <h2 className='text-blueGray-500 text-sm uppercase font-bold block pt-1 no-underline'>
					Orden de Trabajo nro. {id}
				</h2>
				<h4 className='text-blueGray-500 text-sm uppercase font-bold block pt-1 py-2 no-underline'>
					Estado: {data?.state}
				</h4>
			</div>
			<div className='w-full'>
				<h4 className='text-black text-sm uppercase font-bold block pt-1 py-2 no-underline'>
					Instrucciones
				</h4>
			{data &&
				data.instructionsFields.map(field => (
				  <FieldContainer key={field.value} {...field} />
				))}
			</div>
			<div className='w-full'>
				<h4 className='text-black text-sm uppercase font-bold block pt-1 py-2 no-underline'>
					Resultados
				</h4>
			{data &&
				data.resultsFields.map(field => (
				  <FieldContainer key={field.value} {...field} />
				))}
			</div>
		</div>
	);
};

export default OrderContainer;
