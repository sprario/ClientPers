import React, { useContext } from 'react';
import { Outlet, useSearchParams, Link, useParams } from 'react-router-dom';
import { UserContext } from '@/context';
import useQuery from '../../hooks/useQuery';
import Spinner from '@/components/Layout/Spinner';
import { getOrders } from '@/services/orders';


const Orders: React.FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);

	const orderQuery = useQuery(() => getOrders(userProfile?._id), { staleTime: 60000, cacheTime: 60000 });

	const { data, isLoading } = orderQuery


	return (
		<div className="flex w-full h-auto">
			{isLoading && <Spinner size='medium' loading={true} isfullPage={false} />}
			<div className='w-1/5'>
				<nav className=" bg-silver-400">
					<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 no-underline">
						Ordenes de Trabajo
					</h6>
					<hr className="my-4 md:min-w-full" />
					<ul className=" flex flex-col list-none">
					{data && data.map(order => (
						<div key={order.id} className="text-sm uppercase py-1 font-bold block text-blueGray-700 hover:text-blueGray-500">
							<i className="fa fa-table mr-2 text-sm text-blueGray-300"></i>
							<Link to={`${order.id}`}>{order.id}</Link>
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

export default Orders;
