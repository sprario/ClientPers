import { FunctionComponent, MouseEventHandler } from 'react';
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import Avatar  from '../Avatar';
import persoft  from '@/assets/persoft.jpg';
import persoftLogo from '@/assets/persoft-logo.png';
import { useEffect } from 'react';

type RoutesProps = {
  routes : {
    groups: {
      title?: string;
      path: string;
      icon?: string;
    }
  }[];
};


const SideBar: FunctionComponent<RoutesProps> = ({ routes }) => {
  let resolved = useResolvedPath(window.location.pathname);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log(match, 'MATCH');
  const toggleNavbar = (collapseID: string): void => {
    document?.getElementById(collapseID)?.classList?.toggle("hidden");
    document?.getElementById(collapseID)?.classList?.toggle("bg-white");
    document?.getElementById(collapseID)?.classList?.toggle("m-2");
    document?.getElementById(collapseID)?.classList?.toggle("py-3");
    document?.getElementById(collapseID)?.classList?.toggle("px-6");
  };
  
  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto "
        >
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => toggleNavbar('collapse-sidebar')}
          >
            <i className="fa fa-bars"></i>
          </button>
          <div
            className="md:block text-left md:pb-2 w-10  text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            <Link to='/'>
              <img src={persoftLogo} alt='persoft integraciones'/>
            </Link>
          </div>

          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <div className="items-center flex">
                <Avatar />
              </div>
            </li>
          </ul>
          <div
            className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
            id="collapse-sidebar"
          >
            <div
              className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
            >
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <div
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    Persoft
                  </div>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => toggleNavbar('collapse-sidebar')}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <img src={persoft} alt='persoft integraciones'/>
            <hr className="my-4 md:min-w-full" />
            <h6
              className="md:min-w-full px-5 text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Módulos
            </h6>

            <ul className="md:flex-col px-5 md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <NavLink
                  to="/"
                  className={`text-xs uppercase py-3 font-bold block ${match ? 'text-pink-500 hover:text-pink-600' : 'text-blueGray-700 hover:text-blueGray-500'} `}
                  // className={({ isActive }) => {
                  //     //console.log(isActive, 'AVER');
                  //     return isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                  //   }
                  // }
                >
                  <i
                    className="fa fa-home text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Inicio
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  to="forms"
                  className={`text-xs uppercase py-3 font-bold block ${match ? 'text-pink-500 hover:text-pink-600' : 'text-blueGray-700 hover:text-blueGray-500'} `}
                //   className={({ isActive }) => {
                //     //console.log(isActive, 'AVER');
                //     return isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin'
                //   }
                // }
                >
                  <i className="fa fa-table mr-2 text-sm text-blueGray-300"></i>
                  Formularios
                </NavLink>
              </li>

              <li className="items-center">
                <Link
                  to="orders"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i
                    className="fa fa-file-text mr-2 text-sm text-blueGray-300"
                  ></i>
                  Ordenes de Trabajo
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6
              className="md:min-w-full px-5 text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Usuarios
            </h6>
           {/* //TODO: Setear para que este menú se muestre segun perfil de usuario */}
            <ul
              className="md:flex-col md:min-w-full px-5 flex flex-col list-none md:mb-4"
            >
              <li className="items-center">
                <Link
                  to="dashboard/users"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fa fa-users text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Lista de usuarios
                </Link>
              </li>

              <li className="items-center">
                <Link
                  to="adduser"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fa fa-user-plus text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Nuevo Usuario
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full " />
            <h6
              className="md:min-w-full px-5 text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Mi cuenta
            </h6>

            <ul
              className="md:flex-col md:min-w-full px-5 flex flex-col list-none md:mb-4"
            >

              <li className="items-center">
                <Link
                  to="profile"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fa fa-user text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Perfil
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;