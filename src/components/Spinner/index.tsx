import React, { FunctionComponent } from 'react';

interface SpinnerProps {
  loading: boolean,
  size?: 'small' | 'medium' | 'large',
}

const Spinner: FunctionComponent<SpinnerProps> = ({loading = false, size = 'large' }: SpinnerProps) => {
  const sizes = {
    small : 'h-32 w-32',
    medium: 'h-48 w-48',
    large: 'h-64 w-64'
  }
  
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className={`border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 ${sizes[size]}`}/>
    </div>
  )
};

export default Spinner;
