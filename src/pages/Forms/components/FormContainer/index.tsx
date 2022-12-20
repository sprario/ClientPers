import React, { FunctionComponent, useContext } from 'react';
import useQuery from '../../../../hooks/useQuery';
import { useParams } from 'react-router-dom';
import { UserContext } from '@/context';
import { getFormWithId } from '@/services/forms';
import FieldContainer from '../FieldContainer';
import Spinner from '@/components/Layout/Spinner';

const FormContainer: FunctionComponent =  () => {
	const { id } = useParams();
	const { userProfile } = useContext(UserContext);

	const formQuery = useQuery(() => getFormWithId(userProfile?.id, id), { staleTime: 60000, cacheTime: 60000 });

	const { data, isLoading } = formQuery;


	return (
		<div className='flex flex-col w-full shadow border-l-stone-800 px-4' >
			{isLoading && <Spinner isfullPage={false} loading={true} size='small' />}
			<div className=''>
			  <h2 className='text-blueGray-500 text-md uppercase font-bold block pt-1 no-underline'>
					{data ? data.name : ''}
				</h2>
			  <h4 className='text-blueGray-500 text-sm uppercase font-bold block pt-1 no-underline'>
					ID : {id}
				</h4>
			</div>
			<div className='w-full'>
			{data &&
				data.fields.map(field => (
				  <FieldContainer type={field.type} label={field.label} value={field.value} />
				))}
			</div>
		</div>
	);
};

export default FormContainer;
