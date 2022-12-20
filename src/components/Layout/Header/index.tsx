import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';


const Header: FunctionComponent = () => {
    const [ isHidden, setIsHidden ] = useState<string>('hidden')
    // function openDropdown(event, dropdownID) {
    //     let element = event.target;

    //   }

    return (
      <nav
        className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
    	>
        <div
          className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
        >
          <Link
            className="text-gray-600 text-sm uppercase hidden lg:inline-block font-semibold"
            to="/"
            >Persoft Integraciones
          </Link>          
        </div>
        <div>
          <ul
            className="flex-col md:flex-row list-none items-center hidden md:flex cursor-pointer"
          >
            <Avatar />
          </ul>
        </div>
     </nav>
    );
};

export default Header;
