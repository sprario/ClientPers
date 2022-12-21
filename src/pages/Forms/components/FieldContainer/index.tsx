import React, { FunctionComponent } from 'react';
import { formatLongDateHour } from '@/utils/formatters/date';

interface FieldContainerProps {
  label: string;
  value: string;
  type: string;
}

const FieldContainer: FunctionComponent<FieldContainerProps> = ({ label, value, type = 'text' }: FieldContainerProps ) => {

  // const text = () => (
  //   <>
  //     <div className='flex items-center'>
  //       <p className='md:min-w-full border-red-600 text-blueGray-500 text-xs uppercase font-bold no-underline'>
  //         {label + ':'}
  //       </p>
  //     </div><div className='border-red-700 px-5 items-center'>
  //       <p className='text-sm'>{value}</p>
  //     </div>
  //   </>
  // );

  // const date = () => (
  //   <>
  //     <div className='flex items-center'>
  //       <p className='md:min-w-full border-red-600 text-blueGray-500 text-xs uppercase font-bold no-underline'>
  //         {label + ':'}
  //       </p>
  //     </div><div className='border-red-700 px-5 items-center'>
  //       <p className='text-sm'>{formatLongDateHour(new Date(value))}</p>
  //     </div>
  //   </>
  // );
  
  
  
  return (
    <div
    
    className="flex flex-row shadow rounded-lg border-zinc-500 my-5 px-2 py-2"
    >
      <div className='flex items-center' key={label}>
        <p className='md:min-w-full border-red-600 text-blueGray-500 text-xs uppercase font-bold no-underline'>
          {label + ':'} 
        </p>
      </div>
      <div className='border-red-700 px-5 items-center'>
        <p className='text-sm'>{value}</p>
      </div>
      
    </div>
  );
};

export default FieldContainer;
