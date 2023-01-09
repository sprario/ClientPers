import React, { FunctionComponent, useContext, useEffect } from 'react';
import useQuery from '../../../../hooks/useQuery';
import { useParams } from 'react-router-dom';
import { UserContext } from '@/context';
import { getFormWithId } from '@/services/forms';
import FieldContainer from '../FieldContainer';
import Spinner from '@/components/Layout/Spinner';

const FormContainer: FunctionComponent =  () => {
	const { id } = useParams();
	const { userProfile } = useContext(UserContext);

	const formQuery = useQuery(() => getFormWithId(userProfile?._id, id), { staleTime: 60000, cacheTime: 60000 });

	const { data, isLoading, refetch, isFetching } = formQuery;

	


	useEffect(() => {
		refetch()
	}, [id])

	return (
		<div className={`flex flex-col w-full border-rounded shadow`} >
			{isLoading || isFetching && <Spinner isfullPage={false} loading={true} size='small' />}
			<div className={`bg-full bg-no-repeat bg-${data?.color.toLocaleLowerCase()}-500`}>
			  <h2 className='text-black text-md uppercase font-bold block pt-1 no-underline py-2 px-2'>
					{data?.title}
				</h2>
			  <h4 className='text-white text-sm uppercase font-bold block pt-1 px-2 py-2 no-underline'>
					ID de Formulario : {id}
				</h4>
				<h4 className='text-white text-sm uppercase font-bold block pt-1 px-2 py-2 no-underline'>
					Esquema de Formulario : {data?.schema_id}
				</h4>
			</div>
			<div className={`w-full p-2 bg-${data?.color.toLocaleLowerCase()}-200`}>
			{data &&
				data?.formValues.map((props, idx) => {
					console.log(props, idx)
					return (
				  <FieldContainer key={idx*Math.random()} {...props} />
				)})}
			</div>
		</div>
	);
};

export default FormContainer;
