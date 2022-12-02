import React from "react";
import PropTypes from "prop-types";

type ButtonProps = {
  id?: string;
  children: string;
  type?: 'submit' | 'button';
  color?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FunctionComponent<ButtonProps> = ({ children, onClick, disabled=false, id, type, variant='primary', ...rest}: ButtonProps) => {
  const styleVariant = variant === 'primary' ? 
    `w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none ${disabled && 'opacity-75 pointer-events-none'}` : 
    `inline-block bg-blue-600 col text-white  ${disabled ? ' disabled:opacity-75 ' : 'hover:bg-yellow-500'}`;

  
  
  return (
    <button onClick={onClick} type={type} id={id} disabled={disabled} className={`rounded-lg p-2 ${styleVariant}`}>
      {children}
    </button>
  );
};


export default Button;
