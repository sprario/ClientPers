import React, { useContext, useState } from 'react';
import { Outlet, useSearchParams, Link, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { UserContext } from '@/context';
import useQuery from '../../hooks/useQuery';
import { getForms } from '../../services/forms';
import Spinner from '@/components/Layout/Spinner';
import "react-datepicker/dist/react-datepicker.css";


const Forms: React.FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);
	const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

	const formQuery = useQuery(() => getForms(userProfile?._id, startDate?.toISOString(), endDate?.toISOString()), { staleTime: 60000, cacheTime: 60000 });

	const { data, isLoading } = formQuery


	console.log(data)

	return (
		<div className="flex w-full h-auto">
			{isLoading && <Spinner size='medium' loading={true} isfullPage={false} />}
			<div className='w-1/5'>
				<nav className="w-full bg-silver-400">
					<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 no-underline">
						Formularios
					</h6>
					<hr className="my-4 md:min-w-full" />
					<div className="flex flex-col justify-between">
						<div className="flex flex-row my-2 shadow mx-1 px-1">
							<DatePicker
								selected={startDate}
								dateFormat="dd/MM/yyyy"
								onChange={(date) => setStartDate(date)}
								selectsStart
								startDate={startDate}
								endDate={endDate}
							/>
							<i className="fa fa-calendar text-sm mt-1 text-blueGray-300"></i>	
						</div>
						<div className="flex flex-row my-2 shadow mx-1 px-1">
							<DatePicker
								selected={endDate}
								onChange={(date) => setEndDate(date)}
								selectsEnd
								title='Hasta'
								dateFormat="dd/MM/yyyy"
								startDate={startDate}
								endDate={endDate}
								minDate={startDate}
							/>
							<i className="fa fa-calendar text-sm mt-1 pl-1 text-blueGray-300"></i>
						</div>
						<button
							className="bg-[#C0D467] text-black font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md"
							type="button"
							onClick={() => formQuery.refetch()}
						>
              Buscar Formularios
            </button>
					</div>
					<div>
						{data && <ul className=" flex flex-col list-none">
							{formQuery.isFetching && <Spinner size='medium' loading={true} isfullPage={false} />}
							{formQuery.data && formQuery.data.data.map(form => (
								<div key={form.id} className="text-sm uppercase py-1 font-bold block text-blueGray-700 hover:text-blueGray-500">
									<i className="fa fa-table mr-2 text-sm text-blueGray-300"></i>
									<Link to={`${form.id}`}>{form.id}</Link>
								</div>
								))}
						</ul> }
					</div>
				</nav>
			</div>
			<div className="w-full px-5 py-4">
					<Outlet />
			</div>
		</div>
	);
};

export default Forms;
