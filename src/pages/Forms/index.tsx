import React, { useContext } from 'react';
import { Outlet, useSearchParams, Link, useParams } from 'react-router-dom';
import { UserContext } from '@/context';
import useQuery from '../../hooks/useQuery';
import { getForms } from '../../services/forms';
import Spinner from '@/components/Layout/Spinner';


const Forms: React.FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);

	const formQuery = useQuery(() => getForms(userProfile?._id), { staleTime: 60000, cacheTime: 60000 });

	const { data, isLoading } = formQuery


	return (
		<div className="flex w-full h-auto">
			{isLoading && <Spinner size='medium' loading={true} isfullPage={false} />}
			<div className='w-1/5'>
				<nav className=" bg-silver-400">
					<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 no-underline">
						Formularios
					</h6>
					<hr className="my-4 md:min-w-full" />
					<ul className=" flex flex-col list-none">
					{formQuery.data && formQuery.data.map(form => (
						<div key={form.id} className="text-sm uppercase py-1 font-bold block text-blueGray-700 hover:text-blueGray-500">
							<i className="fa fa-table mr-2 text-sm text-blueGray-300"></i>
							<Link to={`${form.id}`}>{form.id}</Link>
						</div>
						))}
					</ul>
				</nav>
			</div>
			<div className="w-full px-5 py-4">
					<Outlet />
			</div>
		</div>
	);
};

export default Forms;
