import React, { FunctionComponent } from 'react';

interface FieldContainerProps {
  label: string;
  value: string;
}

const FieldContainer: FunctionComponent<FieldContainerProps> = ({ label, value }: FieldContainerProps ) => {

  return (
    <div
    key={label}
    className="flex flex-row shadow rounded-lg border-zinc-500 my-5 px-2 py-2"
    >
      <div className='flex items-center'>
        <p className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold no-underline'>
          {label + ':'} 
        </p>
      </div>
      <div className='px-5 items-center'>
        <p className='text-sm'>{value}</p>
      </div>
      
    </div>
  );
};

export default FieldContainer;
