import React, { useContext, useMemo, useState } from 'react';
import { Outlet, useSearchParams, Link, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { UserContext } from '@/context';
import useQuery from '../../hooks/useQuery';
import { getForms } from '../../services/forms';
import Spinner from '@/components/Layout/Spinner';
import "react-datepicker/dist/react-datepicker.css";
import { formatShortDate } from '@/utils/formatters/date';


const Forms: React.FunctionComponent = () => {
	const { userProfile } = useContext(UserContext);
	const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

	const formQuery = useQuery(() => getForms(userProfile?._id, startDate?.toISOString(), endDate?.toISOString()), { staleTime: 60000, cacheTime: 60000 });

	const { data, isLoading } = formQuery

	const isDisabled = useMemo(() => {
		if (!startDate ||!endDate) return true;
    return (
      startDate &&
      endDate &&
      (startDate.getTime() - startDate.getTime() > endDate.getTime())
    );
	}, [startDate, endDate]);


	console.log(data)

	return (
		<div className="flex w-full h-auto">
			{isLoading && <Spinner size='medium' loading={true} isfullPage={false} />}
			<div className='w-2/5'>
				<nav className="w-full bg-silver-400">
					<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 no-underline">
						Formularios
					</h6>
					<hr className="my-4 md:min-w-full" />
					<div className="flex flex-col w-full justify-between">
						<div className="flex flex-row my-2 shadow mx-1">
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
						<div className="flex flex-row my-2 shadow mx-1 ">
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
							className="bg-blue-500 disabled:opacity-50 text-[#C0D467] font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-md"
							type="button"
							disabled={isDisabled}
							onClick={() => formQuery.refetch()}
						>
              Buscar
            </button>
					</div>
					<div>
						{data && <ul className=" flex flex-col list-none">
							{formQuery.isFetching && <Spinner size='medium' loading={true} isfullPage={false} />}
							{formQuery.data && formQuery.data.data.map(form => (
								<div key={form.id} className="flex flex-row text-sm uppercase py-1 font-bold text-blueGray-700 hover:text-blueGray-500">
									<i className="fa fa-table text-sm mt-1 px-2 text-blueGray-300"></i>
									<Link to={`${form.id}`}>{form.id}</Link>
									<p className='px-2' >{formatShortDate(new Date(form.created))}</p>
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
