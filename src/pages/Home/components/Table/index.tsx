import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface ColumnsTable {
  id: string;
  creationAt:  string | Date;
}

interface TableProps {
  data: ColumnsTable[] | undefined;
}

const TableForm: FunctionComponent<TableProps> = ({ data }: TableProps) => {

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
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
                   <Link key={form.id}  to={`forms/${form.id}`}> {form.id}</Link> 
                  </td>
                  <td
                    key={idx.toString()}
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  >
                    {form.creationAt.toLocaleString()}
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

export default TableForm;
