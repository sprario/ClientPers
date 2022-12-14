import { rest } from 'msw'
import { responseFormSuccess, responseForms } from '../../data/forms'
import { API_URL } from '../../../constants'


const SERVICE_BASE_URL = `${API_URL}/forms/:user/:id`;

const formsHandlers = [
	rest.get(SERVICE_BASE_URL, async (req, res, ctx) => {
    const { user, id } = req.params;
    if (id) return res(ctx.delay(3000), ctx.status(200), ctx.json(responseFormSuccess))
	   
	return res(ctx.delay(3000), ctx.status(200), ctx.json(responseForms))
	}),
]

export default formsHandlers;
