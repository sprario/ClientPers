import React, { FunctionComponent } from 'react';

interface FieldContainerProps {
  label: string;
  value: string;
}

const FieldContainer: FunctionComponent<FieldContainerProps> = ({ label, value }: FieldContainerProps ) => {

  return (
    <div
    key={label}
    className="flex flex-row w-full border-b-neutral-700 my-5 py-2"
  >
    <div className='flex items-center'>
      <p className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold'>
        {label + ':'} 
      </p>
    </div>
    <div className='border-red-700 px-2 items-center'>
      <p className='text-sm'>{value}</p>
    </div>
    
  </div>
  );
};

export default FieldContainer;
