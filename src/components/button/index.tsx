import React from "react";

type ButtonProps = {
  id?: string;
  children: string;
  type?: 'submit' | 'button';
  color?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large',
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FunctionComponent<ButtonProps> = ({ children, onClick, disabled=false, id, type, size, variant='primary', ...rest}: ButtonProps) => {
  
  const styleVariant = variant === 'primary' ? 
    `tracking-wide text-white inline-block transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none ${disabled && 'opacity-75 pointer-events-none'}` : 
    `inline-block bg-blue-600 col text-white  ${disabled ? 'opacity-75 ' : 'hover:bg-yellow-500'}`;

  const sizes = {
      small : 'h-8 w-20',
      medium: 'h-10 w-40',
      large: 'h-12 w-60'
  }

  
  return (
    <button onClick={onClick} type={type} id={id} disabled={disabled} className={`rounded-lg p-2 ${styleVariant} ${size ? sizes[size] : 'w-full'}`}>
      {children}
    </button>
  );
};


export default Button;
