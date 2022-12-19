import { FunctionComponent, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { createPopper } from '@popperjs/core';


const SideBar: FunctionComponent = () => {
  // const toggleNavbar = (collapseID: string): void => {
  //   document?.getElementById(collapseID)?.classNameNameList.toggle("hidden");
  //   document?.getElementById(collapseID)?.classNameNameList.toggle("bg-white");
  //   document?.getElementById(collapseID)?.classNameNameList.toggle("m-2");
  //   document?.getElementById(collapseID)?.classNameNameList.toggle("py-3");
  //   document?.getElementById(collapseID)?.classNameNameList.toggle("px-6");
  // };

  //const openDropdown = (event, dropdownID) => {
    // let element = event.target;
    // while (element.nodeName !== "A") {
    //   element = element.parentNode;
    // }
    // createPopper(element, document.getElementById(dropdownID), {
    //   placement: "bottom-start"
    // });
    // document.getElementById(dropdownID)?.classNameList.toggle("hidden");
    // document.getElementById(dropdownID)?.classNameList.toggle("block");
  //}
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
            // onClick="toggleNavbar('example-collapse-sidebar')"
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
              <a
                className="text-blueGray-500 block py-1 px-3"
                href="#pablo"
                // onClick="openDropdown(event,'notification-dropdown')"
                ><i className="fas fa-bell"></i
              ></a>
              <div
                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                id="notification-dropdown"
              >
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Action</a
                ><a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Another action</a
                ><a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Something else here</a
                >
                <div
                  className="h-0 my-2 border border-solid border-blueGray-100"
                ></div>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Seprated link</a
                >
              </div>
            </li>
            <li className="inline-block relative">
              <a
                className="text-blueGray-500 block"
                href="#pablo"
                // onClick="openDropdown(event,'user-responsive-dropdown')"
                ><div className="items-center flex">
                  <span
                    className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
                    ><img
                      alt="..."
                      className="w-full rounded-full align-middle border-none shadow-lg"
                      src="../../assets/img/team-1-800x800.jpg"
                  /></span></div
              ></a>
              <div
                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                id="user-responsive-dropdown"
              >
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Action</a
                ><a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Another action</a
                ><a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Something else here</a
                >
                <div
                  className="h-0 my-2 border border-solid border-blueGray-100"
                ></div>
                <a
                  href="#pablo"
                  className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                  >Seprated link</a
                >
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
                  <a
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="../../index.html"
                  >
                    Persoft
                  </a>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    // onClick="toggleNavbar('example-collapse-sidebar')"
                  >
                    <i className="fas fa-times"></i>
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
                  <i className="fas fa-tv mr-2 text-sm opacity-75"></i>
                  Dashboard
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./settings.html"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="fas fa-tools mr-2 text-sm text-blueGray-300"></i>
                  Settings
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./tables.html"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i className="fas fa-table mr-2 text-sm text-blueGray-300"></i>
                  Tables
                </a>
              </li>

              <li className="items-center">
                <a
                  href="./maps.html"
                  className="text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                >
                  <i
                    className="fas fa-map-marked mr-2 text-sm text-blueGray-300"
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
                    className="fas fa-fingerprint text-blueGray-300 mr-2 text-sm"
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
                    className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Register
                </a>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />
            <h6
              className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              No Layout Pages
            </h6>

            <ul
              className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
            >
              <li className="items-center">
                <a
                  href="../landing.html"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fas fa-newspaper text-blueGray-300 mr-2 text-sm"
                  ></i>
                  Landing Page
                </a>
              </li>

              <li className="items-center">
                <a
                  href="../profile.html"
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                >
                  <i
                    className="fas fa-user-circle text-blueGray-300 mr-2 text-sm"
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