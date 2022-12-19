import { FunctionComponent, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { AvatarMenu } from '@/components/layout';

type RoutesProps = {
  routes : {
    path: string;
    icon?: string;
  }[];
};


const SideBar: FunctionComponent<RoutesProps> = ({ routes }) => {
  const toggleNavbar = (collapseID: string): void => {
    document?.getElementById(collapseID)?.classList?.toggle("hidden");
    document?.getElementById(collapseID)?.classList?.toggle("bg-white");
    document?.getElementById(collapseID)?.classList?.toggle("m-2");
    document?.getElementById(collapseID)?.classList?.toggle("py-3");
    document?.getElementById(collapseID)?.classList?.toggle("px-6");
  };
  console.log(routes, 'RUTAs');
  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      >
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
        >
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => toggleNavbar('collapse-sidebar')}
          >
            <i className="fa fa-bars"></i>
          </button>
          <div
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            {/* Persoft */}
          </div>

          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <div className="items-center flex">
                <AvatarMenu />
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
            <hr className="my-4 md:min-w-full" />
            <h6
              className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Admin Layout Pages
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <a
                  href="./dashboard.html"
                  className="text-xs uppercase py-3 font-bold block text-pink-500 hover:text-pink-600"
                >
                  <i className="fa fa-square-list mr-2 text-sm text-blueGray-300"></i>
                  Dashboard
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./settings.html"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="fa fa-tools mr-2 text-sm text-blueGray-300"></i>
                  Settings
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./tables.html"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="fa fa-table mr-2 text-sm text-blueGray-300"></i>
                  Tables
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./maps.html"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i
                    className="fa fa-map-marked mr-2 text-sm text-blueGray-300"
                  ></i>
                  Maps
                </a>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6
              className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Auth Layout Pages
            </h6>

            <ul
              className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
            >
              <li className="items-center">
                <a
                  href="../auth/login.html"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fa fa-fingerprint text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Login
                </a>
              </li>

              <li className="items-center">
                <a
                  href="../auth/register.html"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fa fa-clipboard-list text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Register
                </a>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6
              className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              Mi cuenta
            </h6>

            <ul
              className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
            >

              <li className="items-center">
                <a
                  href="../profile.html"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fa fa-user text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Profile Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;