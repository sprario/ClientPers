import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { ChanghePasswordRequest, AddUserResponse } from './types';

const SERVICE_BASE_URL = `${API_URL}/users`;

export const changePasswordRequest = (req: ChanghePasswordRequest): FetchServiceEndpoint<AddUserResponse> => {
	const url = `${SERVICE_BASE_URL}/${req.idUser}`;

	return {
		keys: ['change-password'],
		fetcher: options =>
			fetchJson<AddUserResponse>({
				url,
				method: 'PUT',
				data: req,
				...options,
			}).then(res => {
				return res;
			}),
	};
};
