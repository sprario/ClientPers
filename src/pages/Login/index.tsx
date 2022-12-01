import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../components';

type FormValues = {
  email: string;
  password: string;
};


const Login = () => {
  const { register, handleSubmit, watch } = useForm<FormValues>();
  
  const email = watch('email')
  const password = watch('password')
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  
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
                <button type='submit' disabled={!!validateForm} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>
    </div>
</div>
  );
};

export default Login;
