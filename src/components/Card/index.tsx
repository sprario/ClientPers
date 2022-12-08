import React, { FunctionComponent } from 'react';

interface CardProps {
   children: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ children }) => {

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            {children}
          </div>
        </div>
    );
};

export type { CardProps}
export default Card;
