import React from "react";

const SignatureField = ({title, value, id, widget_type}: any ) => {
  return (
    <>
      <div className='flex items-center' key={id}>
        <p className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold no-underline'>
          {title + ':'}
        </p>
      </div>
      <div className='flex flex-row items-center'>
      {value && value.map((value: any) => 
        <div className='flex-col px-5 py-2 items-center'>
          <img className="w-32 h-32" src={value.signature_url} alt={value.name}/>
          <p className='text-sm'>Aclaracion: {value.name}</p>
        </div>
      )}
      </div>
      <hr className="my-2 md:min-w-full" />
    </>
  );
};

export default SignatureField;
