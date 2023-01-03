import { formatLongDate, formatLongDateHour, parseDate, parseServiceDate } from '@/utils/formatters/date';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ColumnsTable {
  id: string;
  created:  string;
}

interface TableProps {
  data: ColumnsTable[] | undefined;
  type?: 'forms' | 'orders';
}

const TableHome: FunctionComponent<TableProps> = ({ data, type = 'forms' }: TableProps) => {

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
      <div className="block w-full overflow-x-auto">
        <table
          className="items-center bg-transparent w-full border-collapse "
        >
          <thead>
            <tr>
                  <th
                    key={`id-${type}`}
                    className="px-6 bg-blueGray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Id
                  </th>
                  <td
                    key={`date-${type}`}
                    className="px-6 bg-blueGray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
                  >
                    Fecha
                  </td>
              </tr> 
          </thead>
          <tbody>
            {
              data && data.map(({id, created}) => (
                <tr key={id}>
                  <td
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                  >
                   <Link   to={`${type}/${id}`}> {id}</Link> 
                  </td>
                  <td
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {formatLongDateHour(new Date(created))}
                  </td>
                  
                </tr>   
              ))
            }    
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableHome;
