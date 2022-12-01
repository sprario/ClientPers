import React, { FunctionComponent } from 'react';
import InputProps from './interfaces';

const Input: FunctionComponent<InputProps> = ({name, onChange, onFocus, onBlur, title, disabled = false, type = 'text', placeholder, id, ...rest  }) => {
  return (
    <div>
      <p>{title}</p>
      <input 
       id={id}
       type={type}
       placeholder={placeholder}
       name={name}
       disabled={disabled}
       onBlur={onBlur}
       onChange={onChange}
       onFocus={onFocus}
       className='w-full shadow rounded-lg p-2 border-zinc-500 wd-64'/>
       {rest}
    </div>
    
  )
};

export default Input;
