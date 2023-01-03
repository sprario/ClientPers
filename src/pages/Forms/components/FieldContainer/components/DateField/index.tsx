import React from "react";
import { FieldsForm } from "@/types/domain/forms";
import { formatLongDateHour } from "@/utils/formatters/date";


const DateField = ({title, value, id}: FieldsForm ) => (
  <>
    <div className='flex items-center' key={id}>
      <p className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold no-underline'>
        {title + ':'}
      </p>
    </div>
    <div className='items-center'>
      <p className='text-sm'>{formatLongDateHour(new Date(value))}</p>
    </div>
    <hr className="my-2 md:min-w-full" />
  </>
);

export default DateField;
