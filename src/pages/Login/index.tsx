import React, { FunctionComponent, useContext, useMemo, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { loginRequest } from '../../services/Login';
import persoft from '../../assets/persoft.jpg';
import { Button, Card } from '../../components';
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

	const isDisabled = useMemo(() => !!email && !!password, [email, password]);

	const createLoginMutation = useMutation(loginRequest);

	const onSubmit = handleSubmit(() => {
		createLoginMutation
			.mutateAsync({ email, password })
			.then(response => {
				const { accessToken, userProfile } = response;
				localStorage.setItem('accessToken', accessToken);
				setUserProfile(userProfile);
				navigate('/dashboard');
			})
			.catch(err => {
				setError(err);
			});
	});

	return (
		<Card>
			<img src={persoft} alt="persoft" />
			<form onSubmit={onSubmit} className="tw-mt-6">
				<div className="tw-flex tw-flex-col">
					<div className="tw-mb-2 p-1">
						<input
							className="tw-w-full tw-shadow tw-rounded-lg tw-p-2 tw-border-zinc-500 tw-wd-64"
							{...register('email')}
							type="email"
							placeholder="usuario@mail.com"
						/>
					</div>
					<div className="mb-2 p-1">
						<input
							className="tw-w-full tw-shadow tw-rounded-lg tw-p-2 tw-border-zinc-500 tw-wd-64"
							{...register('password')}
							type="password"
							placeholder="*********"
						/>
					</div>
				</div>
				<Link
					to="/forgot"
					className="tw-text-xs tw-text-blue-700 hover:tw-underline"
				>
					Olvidaste tu contraseña?
				</Link>
				{error && <div>{error}</div>}
				<div className="tw-mt-6">
					<Button type="submit" disabled={!isDisabled}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
