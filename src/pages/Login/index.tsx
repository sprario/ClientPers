import React, { FunctionComponent, useContext, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { loginRequest } from '../../services/Login';
import persoft from '../../assets/persoft.jpg'
import { Button, Card } from '../../components';
import useMutation from '../../hooks/useMutation';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../context';

type FormValues = {
  email: string;
  password: string;
};

const Login: FunctionComponent = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();
  const { setUserProfile } = useContext(UserContext)
  const [ error, setError ] = useState('')
  
  const email = useWatch({ name: 'email', control})
  const password = useWatch({ name: 'password', control})

  const navigate = useNavigate()

  const isDisabled = useMemo(() => !!email && !!password, [ email, password ])

  const createLoginMutation = useMutation(loginRequest);

  
  const onSubmit = handleSubmit((data:FormValues) => {
    createLoginMutation
      .mutateAsync({email,password})
      .then((response) => {
        const { accessToken, userProfile } = response
        localStorage.setItem('accessToken', accessToken)
        setUserProfile(userProfile)
        navigate('/dashboard')
      })
      .catch((err) => {
        console.error(setError(err))
      })
  })

  
  return (
    <Card>
      <img src={persoft} alt='persoft' />
      <form onSubmit={onSubmit} className="mt-6">
          <div className="flex flex-col">
          <div className="mb-2 p-1">
            <input className='w-full shadow rounded-lg p-2 border-zinc-500 wd-64' {...register("email")} type="email" placeholder='usuario@mail.com'/>
          </div>
          <div className="mb-2 p-1">
              <input className='w-full shadow rounded-lg p-2 border-zinc-500 wd-64' {...register("password")} type="password" placeholder='*********'/>
          </div>
          </div>
          <Link
                to="/forgot"
                className="text-xs text-blue-700 hover:underline"
          >
                Olvidaste tu contraseña?
          </Link>
          {error && <div>{error}</div>}
          <div className="mt-6">
              <Button type='submit' disabled={!isDisabled}>
                    Login
              </Button>
          </div>
      </form>
    </Card>
  );
};

export default Login;
