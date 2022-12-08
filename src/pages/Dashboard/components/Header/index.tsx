import React, { FunctionComponent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import persoft from '../../../../assets/persoft.jpg'
import { Button } from '../../../../components';
import { UserContext } from '../../../../context';

const Header: FunctionComponent = () => {
    const { userProfile } = useContext(UserContext)
    
    const name = userProfile ? userProfile.name : 'Usuario'
    const navigate = useNavigate();

    const onClick = () => {
        localStorage.setItem('accessToken','')
        navigate('/login')
    }


    return (
        <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between bg">
          <div className="w-60 max-w-xs max-h-xs px-4">
            <Link to='/' className="block py-5">
              <img
                src={persoft}
                alt="logo"
                className=""
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <nav
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
              >
                <ul className="blcok lg:flex">
                  <li>
                    <Link
                      to='/dashboard'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/forms'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Formularios
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/operations'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Operaciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/clients'
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Clientes
                    </Link>
                  </li>

                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <p className='text-dark hover:text-primary flex py-2 px-10 text-base font-medium lg:ml-12 lg:inline-flex'>Bienvenido {name}</p>
              <Button size='medium' onClick={onClick}>
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;
