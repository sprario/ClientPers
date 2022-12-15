import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header} from '../../components/Layout';
// import { Card } from '../../components';

// TODO: Hacer un componente llamado Panel que englobe a Oulet
// TODO: Hacer componente de Breadcrumbs
// TODO: Hacer componente de Footer
// TODO: Tiene una ruta por defecto
const Dashboard: FunctionComponent = () => {
  return (
    <div className="text-blueGray-700 antialiased">
      <div id="root">
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
              <i className="fas fa-bars"></i>
            </button>
            <a
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              href="../../index.html"
            >
              Notus Tailwind JS
            </a>
            
            <div
              className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden"
              id="example-collapse-sidebar"
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


              <hr className="my-4 md:min-w-full" />
              <h6
                className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
              >
                Documentation
              </h6>

              <ul
                className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"
              >
                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/colors/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i
                      className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"
                    ></i>
                    Styles
                  </a>
                </li>

                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i
                      className="fab fa-css3-alt mr-2 text-blueGray-300 text-base"
                    ></i>
                    CSS Components
                  </a>
                </li>

                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i
                      className="fab fa-angular mr-2 text-blueGray-300 text-base"
                    ></i>
                    Angular
                  </a>
                </li>

                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i
                      className="fab fa-js-square mr-2 text-blueGray-300 text-base"
                    ></i>
                    Javascript
                  </a>
                </li>

                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                    NextJS
                  </a>
                </li>

                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                    React
                  </a>
                </li>

                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i className="fas fa-link mr-2 text-blueGray-300 text-base"></i>
                    Svelte
                  </a>
                </li>

                <li className="inline-flex">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                    target="_blank"
                    className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                  >
                    <i className="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
                    VueJS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="relative md:ml-64 bg-blueGray-50">
          <Header />

          
          <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
              <div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div
                            className="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              className="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              Traffic
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              350,897
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div
                              className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                            >
                              <i className="far fa-chart-bar"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-emerald-500 mr-2">
                            <i className="fas fa-arrow-up"></i> 3.48%
                          </span>
                          <span className="whitespace-nowrap">
                            Since last month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div
                            className="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              className="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              New users
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              2,356
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div
                              className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
                            >
                              <i className="fas fa-chart-pie"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-red-500 mr-2">
                            <i className="fas fa-arrow-down"></i> 3.48%
                          </span>
                          <span className="whitespace-nowrap"> Since last week </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div
                            className="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              className="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              Sales
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              924
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div
                              className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                            >
                              <i className="fas fa-users"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-orange-500 mr-2">
                            <i className="fas fa-arrow-down"></i> 1.10%
                          </span>
                          <span className="whitespace-nowrap"> Since yesterday </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <div
                      className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                    >
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div
                            className="relative w-full pr-4 max-w-full flex-grow flex-1"
                          >
                            <h5
                              className="text-blueGray-400 uppercase font-bold text-xs"
                            >
                              Performance
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                              49,65%
                            </span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div
                              className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500"
                            >
                              <i className="fas fa-percent"></i>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-blueGray-400 mt-4">
                          <span className="text-emerald-500 mr-2">
                            <i className="fas fa-arrow-up"></i> 12%
                          </span>
                          <span className="whitespace-nowrap">
                            Since last month
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
                >
                  <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6
                          className="uppercase text-blueGray-100 mb-1 text-xs font-semibold"
                        >
                          Overview
                        </h6>
                        <h2 className="text-white text-xl font-semibold">
                          Sales value
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex-auto">
                    
                    <div className="relative h-350-px">
                      <canvas id="line-chart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
                >
                  <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6
                          className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"
                        >
                          Performance
                        </h6>
                        <h2 className="text-blueGray-700 text-xl font-semibold">
                          Total orders
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex-auto">
                    
                    <div className="relative h-350-px">
                      <canvas id="bar-chart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
                >
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div
                        className="relative w-full px-4 max-w-full flex-grow flex-1"
                      >
                        <h3 className="font-semibold text-base text-blueGray-700">
                          Page visits
                        </h3>
                      </div>
                      <div
                        className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                      >
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          See all
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    
                    <table
                      className="items-center w-full bg-transparent border-collapse"
                    >
                      <thead>
                        <tr>
                          <th
                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                          >
                            Page name
                          </th>
                          <th
                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                          >
                            Visitors
                          </th>
                          <th
                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                          >
                            Unique users
                          </th>
                          <th
                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                          >
                            Bounce rate
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            /argon/
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            4,569
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            340
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            46,53%
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            /argon/index.html
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            3,985
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            319
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            46,53%
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            /argon/charts.html
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            3,513
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            294
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                            36,49%
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            /argon/tables.html
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            2,050
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            147
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            50,87%
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            /argon/profile.html
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            1,795
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            190
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                            46,53%
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
                >
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div
                        className="relative w-full px-4 max-w-full flex-grow flex-1"
                      >
                        <h3 className="font-semibold text-base text-blueGray-700">
                          Social traffic
                        </h3>
                      </div>
                      <div
                        className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                      >
                        <button
                          className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          See all
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full overflow-x-auto">
                    
                    <table
                      className="items-center w-full bg-transparent border-collapse"
                    >
                      <thead className="thead-light">
                        <tr>
                          <th
                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                          >
                            Referral
                          </th>
                          <th
                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                          >
                            Visitors
                          </th>
                          <th
                            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            Facebook
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            1,480
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <div className="flex items-center">
                              <span className="mr-2">60%</span>
                              <div className="relative w-full">
                                <div
                                  className="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                                >
                                  <div
                                    // style="width: 60%"
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            Facebook
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            5,480
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <div className="flex items-center">
                              <span className="mr-2">70%</span>
                              <div className="relative w-full">
                                <div
                                  className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                                >
                                  <div
                                    // style="width: 70%"
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            Google
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            4,807
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <div className="flex items-center">
                              <span className="mr-2">80%</span>
                              <div className="relative w-full">
                                <div
                                  className="overflow-hidden h-2 text-xs flex rounded bg-purple-200"
                                >
                                  <div
                                    // // style="width: 80%"
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            Instagram
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            3,678
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <div className="flex items-center">
                              <span className="mr-2">75%</span>
                              <div className="relative w-full">
                                <div
                                  className="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200"
                                >
                                  <div
                                    // // // style="width: 75%"
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                          >
                            twitter
                          </th>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            2,645
                          </td>
                          <td
                            className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                          >
                            <div className="flex items-center">
                              <span className="mr-2">30%</span>
                              <div className="relative w-full">
                                <div
                                  className="overflow-hidden h-2 text-xs flex rounded bg-orange-200"
                                >
                                  <div
                                    // style="width: 30%"
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
