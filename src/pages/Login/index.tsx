import React, { FunctionComponent, useContext, useEffect, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { loginRequest } from '@/services/login';
import persoft from '../../assets/persoft.png';
import useMutation from '../../hooks/useMutation';
import { UserContext } from '../../context';

type FormValues = {
	email: string;
	password: string;
};

const Login: FunctionComponent = () => {
	const { register, handleSubmit, control } = useForm<FormValues>();
	const { setUserProfile } = useContext(UserContext);
	const [error, setError] = useState('');

	const email = useWatch({ name: 'email', control });
	const password = useWatch({ name: 'password', control });

	const navigate = useNavigate();

    const createLoginMutation = useMutation(loginRequest, {
        showLoadingBackdrop: true,
        handleErrors: false,
    });
	
	const isDisabled = useMemo(() => !!email && !!password, [email, password]);

  

	const onSubmit = handleSubmit(() => {
		createLoginMutation
			.mutateAsync({ email, password })
			.then(async response => {
        console.log(response)
				const { accessToken, userProfile } = await response.data;
				localStorage.setItem('accessToken', accessToken);
				setUserProfile(userProfile);
				navigate('/dashboard');
			})
			.catch(err => {
				setError(err);
			});
	});

  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void; }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        onSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="text-blueGray-700 antialiased">
    <main>
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-full bg-no-repeat"
          // style="background-image: url(../../assets/img/register_bg_2.png)"
        ></div>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
              >
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="btn-wrapper text-center">
				          	<img src={persoft} alt='logo' />
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Iniciar Sesión</small>
                  </div>
                  {error && <div className="text-red-400 text-center mb-3 font-bold">
                    <small>Por favor verifique los datos ingresados</small>
                  </div>}
                  <form onSubmit={onSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        // for="grid-password"
                        >Email</label>
                      <input
                        type="email"
                        {...register("email")}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        // for="grid-password"
                        >Password
                      </label>
                      <input
                        type="password"
                        {...register("password")}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer"
                        ><input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        /><span
                          className="ml-2 text-sm font-semibold text-blueGray-600"
                          >Remember me</span>
                        </label>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type='submit' disabled={!isDisabled}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a href="#pablo" className="text-blueGray-200"
                    ><small>Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <a href="./register.html" className="text-blueGray-200"
                    ><small>Create new account</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  );
};

export default Login;
