import React, { FunctionComponent } from 'react';

interface SpinnerProps {
  loading: boolean,
  size?: 'small' | 'medium' | 'large',
}

const Spinner: FunctionComponent<SpinnerProps> = ({loading = false, size = 'large' }: SpinnerProps) => {
  const sizes = {
    small : 'tw-h-32 tw-w-32',
    medium: 'tw-h-48 tw-w-48',
    large: 'tw-h-64 tw-w-64'
  }
  
  return (
    <div className="tw-absolute tw-right-1/2 tw-bottom-1/2 tw-transform tw-translate-x-1/2 tw-translate-y-1/2 ">
      <div className={`tw-border-t-transparent tw-border-solid tw-animate-spin tw-rounded-full tw-border-blue-400 tw-border-8 ${sizes[size]}`}/>
    </div>
  )
};

export default Spinner;
