import React, { FunctionComponent, useContext, useState } from 'react';
import { Table } from '@/components/Layout';
import Spinner from '@/components/Layout/Spinner';
import { UserContext } from '@/context';
import useQuery from '@/hooks/useQuery';
import { getClients } from '@/services/users/users';
import Pagination from '@/components/Layout/Pagination';
import { useEffect } from 'react';


interface IClient {
  uid_client: string,
  name: string,
  type: string,
  email: string,
  phone: string,
  others: string
}


const Users: FunctionComponent = () => {
  const { userProfile } = useContext(UserContext);
  const [ limit, setLimit ] = useState(10);
  const [ offset, setOffset ] = useState(0);

  const [ page, setPage ] = useState(1)

	const clientQuery = useQuery(() => getClients(userProfile?._id, limit, offset));

  const data: IClient[] = clientQuery.data?.data.data;
  const paging = clientQuery.data?.data.paging;

  const totalPages = paging ? Math.ceil(paging.total / limit) : 0;

  const  handleChangePage= (newPage) => {
    if (newPage > page) {
      setOffset(offset + limit)
    } else {
      setOffset(offset - limit)
    }
    setPage(newPage);
  }

  const columnsArray = [
    {
      title: 'Nro de cliente',
      key: 'uid_client'
    },
    {
      title: 'Nombre',
      key: 'name'
    },
    {
      title: 'Email',
      key: 'email'
    },
    {
      title: 'Phone',
      key: 'phone',
    },
  ];

  useEffect(() => {
    clientQuery.refetch();
  },[page, data, offset])

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-slate-100 border-0">
        <div className="rounded-t  bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">
              Lista de Usuarios
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-2">
          {(clientQuery.isRefetching || clientQuery.isLoading) && <Spinner loading={clientQuery.isRefetching || clientQuery.isLoading} isfullPage={false} />}
          {clientQuery.isSuccess && clientQuery.isStale &&  <Table data={data} columns={columnsArray} />}
          <Pagination totalPages={totalPages} currentPage={offset / limit + 1} onChangePage={handleChangePage} />
        </div>
      </div>
    </div>
  );
};

export default Users;
