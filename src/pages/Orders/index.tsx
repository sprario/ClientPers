import React, { useContext } from 'react';
import { Outlet, useSearchParams, Link, useParams } from 'react-router-dom';
import { getOrders } from '@/services/orders';
import { useEffect, useMemo, useState } from 'react';
import DatePicker from "react-datepicker";
import { UserContext } from '@/context';
import useQuery from '../../hooks/useQuery';
import { getForms } from '../../services/forms';
import Spinner from '@/components/Layout/Spinner';
import "react-datepicker/dist/react-datepicker.css";
import { formatShortDate } from '@/utils/formatters/date';
import Pagination from '@/components/Layout/Pagination';


const Orders: React.FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);
	const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
	const { id } = useParams();

  const [ page, setPage ] = useState(1)

	const { data, isLoading, isFetching, refetch } = useQuery(() => getOrders(userProfile?._id, startDate?.toISOString(), endDate?.toISOString()), { enabled : false});

	const isDisabled = useMemo(() => {
		if (!startDate || !endDate) return true;
	
		const start = startDate.getTime();
		const end = endDate.getTime();
		return (end - start) / (1000 * 60 * 60 * 24) > 15;
	}, [startDate, endDate]);

	useEffect(() => {
    refetch();
  },[page, data])

	return (
		<div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-slate-100 border-0">
			{isLoading && <Spinner size='medium' loading={true} isfullPage={true} />}		
			<div className="rounded-t block bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">
              Ordenes de Trabajo
            </h6>
          </div>
      </div>
			<div className='flex flex-row  min-h-500'>
				<div className=''>
					<nav className="w-full  bg-silver-400">
						<div className="flex flex-col  w-full justify-between">
							<p className='px-2  mt-3 align-right text-xs text-left'>DESDE</p>
							<div className="flex flex-row bg-white mb-2  mx-1 ml-2">
								<i className="fa fa-calendar text-sm mt-1 pl-1 pr-1 text-blueGray-300 cursor-pointer"></i>	
								<DatePicker
									selected={startDate}
									dateFormat="dd/MM/yyyy"
									onChange={(date) => setStartDate(date)}
									selectsStart
									placeholderText="Desde"
									startDate={startDate}
									endDate={endDate}
									className='cursor-pointer'
								/>							
							</div>
							<p className='px-2  mt-3 align-right text-xs text-left'>HASTA</p>
							<div className="flex flex-row mb-2 bg-white  mx-1 ml-2 ">
								<i className="fa fa-calendar text-sm mt-1 pl-1 pr-1 text-blueGray-300 cursor-pointer"></i>
								<DatePicker
									selected={endDate}
									onChange={(date) => setEndDate(date)}
									selectsEnd
									placeholderText="Hasta"
									dateFormat="dd/MM/yyyy"
									startDate={startDate}
									endDate={endDate}
									minDate={startDate}
									className='cursor-pointer flex w-auto'
								/>
							</div>
							<button
								className="bg-blue-500 disabled:opacity-50 text-white font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md m-2"
								type="button"
								disabled={isDisabled}
								onClick={() => refetch()}
							>
								Buscar
							</button>
						</div>
						<p className='px-2 mb-3 align-right text-xs'>El rango no puede ser mayor a 15 dias</p>
						<div className='mx-2'>
							{data && <ul className=" flex flex-col list-none h-500 overflow-auto">
								{isFetching && <Spinner size='medium' loading={true} isfullPage={false} />}
								{data && data.map(order => (
									<li key={order.id}>
										<div className={`flex flex-row text-sm uppercase py-1 font-bold ${order.id === id ? 'text-blue-500': 'text-blueGray-700'}  hover:text-blueGray-500`}>
											<i className="fa fa-table text-sm mt-1 px-2 text-blueGray-300"></i>
											<Link to={`${order.id}`}>{order.id}</Link>
											<p className='px-2 align-right text-right'>{formatShortDate(new Date(order.created))}</p>
										</div>
										<hr className="md:min-w-full" />
									</li>
									))}
							</ul> }
						</div>
					</nav>
				</div>
					<Outlet />
			</div>
		</div>
	);
};

export default Orders;
