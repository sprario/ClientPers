import { UserContext } from '@/context';
import React, { FunctionComponent, useContext, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { AddUserRequest } from '@/services/addUsers/types';
import useMutation from '@/hooks/useMutation';
import { addUserRequest } from '@/services/addUsers';


const AddUser: FunctionComponent = () => {
  const { userProfile } = useContext(UserContext);
  const { register, handleSubmit, control, reset } = useForm<AddUserRequest>({ defaultValues: { role: 'user' } });

  const email = useWatch({ name: 'email', control });
	const name = useWatch({ name: 'name', control });
  const lastName = useWatch({ name: 'lastName', control });
  const role = useWatch({ name: 'role', control });
  const API_KEY = useWatch({ name: 'API_KEY', control });


  const createAddUserMutation = useMutation(addUserRequest, {
      showLoadingBackdrop: true,
      handleErrors: false
    });
	
	const isDisabled = useMemo(() => !!email && !!name, [email, name]);

	const onSubmit = handleSubmit(() => {
		createAddUserMutation
			.mutateAsync({ email, name, lastName, role, API_KEY })
			.then(response => {
				alert('Usuario agregado con exito!')
        reset();
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
                    <input
                      type="text"
                      {...register("role")}
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

                
                <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Api Key
                  </label>
                  <input
                    type="text"
                    {...register("API_KEY")}
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
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
