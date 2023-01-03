import React from "react";

const SelectionField = ({title, value, id, widget_type}: any ) => {
  return (
    <>
      <div className='flex items-center' key={id}>
        <p className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold no-underline'>
          {title + ':'}
        </p>
      </div>
      {value && value.map((value: any) => 
          <div className='items-center'>
          <p className='text-sm'>{value}</p>
        </div>
      )}
      <hr className="my-2 md:min-w-full" />
    </>
  );
};

export default SelectionField;
