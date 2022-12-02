import React, { useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';

type FormValues = {
  email: string;
  password: string;
};


const Login = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  
  const email = useWatch({ name: 'email', control})
  const password = useWatch({ name: 'password', control})

  const isDisabled = useMemo(() => !!email && !!password, [ email, password ])

  console.log(isDisabled)

  
  const onSubmit = handleSubmit((data:FormValues) => console.log(data));
  
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            Persoft Integraciones
        </h1>
        <form onSubmit={onSubmit} className="mt-6">
            <div className="flex flex-col">
            <div className="mb-2 p-1">
                <input className='w-full shadow rounded-lg p-2 border-zinc-500 wd-64' {...register("email")} type="email" placeholder='usuario@mail.com'/>
            </div>
            <div className="mb-2 p-1">
                <input className='w-full shadow rounded-lg p-2 border-zinc-500 wd-64' {...register("password")} type="password" placeholder='*********'/>
            </div>
            </div>
            <a
                href="#"
                className="text-xs text-purple-600 hover:underline"
            >
                Olvidaste tu contraseña?
            </a>
            <div className="mt-6">
                <Button type='submit' disabled={!isDisabled}>
                    Login
                </Button>
            </div>
        </form>
    </div>
</div>
  );
};

export default Login;
