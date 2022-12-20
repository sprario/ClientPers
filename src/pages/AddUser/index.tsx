import { UserContext } from '@/context';
import React, { FunctionComponent, useContext, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { AddUserRequest } from '@/services/addUsers/types';
import { useNavigate } from 'react-router-dom';
import useMutation from '@/hooks/useMutation';
import { addUserRequest } from '@/services/addUsers';


const AddUser: FunctionComponent = () => {
  const { userProfile } = useContext(UserContext);
  const { register, handleSubmit, control, reset } = useForm<AddUserRequest>();

  const email = useWatch({ name: 'email', control });
	const name = useWatch({ name: 'name', control });
  const lastName = useWatch({ name: 'lastName', control });
  const role = useWatch({ name: 'role', control });

	const navigate = useNavigate();

    const createLoginMutation = useMutation(addUserRequest, {
      showLoadingBackdrop: true,
    });
	
	const isDisabled = useMemo(() => !!email && !!name, [email, name]);

  function showDropdownOptions() {
    document.getElementById("options").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
}

	const onSubmit = handleSubmit(() => {
		createLoginMutation
			.mutateAsync({ email, name, lastName, role })
			.then(response => {
				alert('Usuario agregado con exito!')
        reset();
        navigate('');
			})
			.catch(err => {
				return err.message;
			});
	});
  
  
  return (
      <div className="w-full lg:w-8/12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-slate-100 border-0"
        >
          <div className="rounded-t  bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-slate-700 text-xl font-bold">
                Nuevo Usuario
              </h6>
              <i className="fa fa-user-plus text-slate-500 mr-2 text-sm"></i>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={onSubmit}>
              <h6
                className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase"
              >
                Información del Usuario
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Rol
                    </label>
                    <div className="flex flex-row justify-center min-h-screen pt-4 bg-gray-100 min-w-screen">
                      <div className="flex-none p-2">
                        <button onClick={showDropdownOptions} className="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600">
                          <span className="select-none">Select an item</span>

                          <svg id="arrow-down" className="hidden w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                          <svg id="arrow-up" className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" /></svg>
                        </button>
                    <div id="options" className="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">user</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">client</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">admin</a>
                    </div>
    </div>
</div>
                    <input
                      type="text"
                      {...register("role")}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <div className='mt-20  flex justify-end'>
                <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit"
                      disabled={!isDisabled}
                    >
                      Crear usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default AddUser;
