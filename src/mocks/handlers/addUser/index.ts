import { rest } from 'msw';
import { responseLoginSuccess } from '../../data/login';
import { API_URL } from '../../../constants';

const API_URL_USERS = `${API_URL}/users`;

const addUserHandlers = [
	rest.post(API_URL_USERS, async (req, res, ctx) => {
		console.log(req.body);
		return res(ctx.delay(3000), ctx.status(200), ctx.json({ status: 'success' }));

	}),
];

export default addUserHandlers;
