import React from "react";
import { FieldsForm } from "@/types/domain/forms";


const TextField = ({ title, value, id }: FieldsForm) => {
  return (
    <>
      <div className='flex items-center' key={id}>
        <p className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold no-underline'>
          {title + ':'}
        </p>
      </div>
      <div className='items-center'>
        <p className='text-sm'>{value || '(Campo vacio)'}</p>
      </div>
      <hr className="my-2 md:min-w-full" />
    </>
  );
};

export default TextField;
