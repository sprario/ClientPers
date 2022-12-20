import { formatLongDate, formatLongDateHour, parseDate, parseServiceDate } from '@/utils/formatters/date';
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ColumnsTable {
  id: string;
  creationAt:  string;
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
                    key={'id'}
                    className="px-6 bg-blueGray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                  >
                    Id
                  </th>
                  <td
                    key={'fecha'}
                    className="px-6 bg-blueGray-200 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
                  >
                    Fecha
                  </td>
              </tr> 
          </thead>
          <tbody>
            {
              data && data.map((form, idx) => (
                <tr>
                  <td
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                  >
                   <Link key={form.id}  to={`${type}/${form.id}`}> {form.id}</Link> 
                  </td>
                  <td
                    key={idx.toString()}
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {formatLongDateHour(new Date(form.creationAt))}
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
