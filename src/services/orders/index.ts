import { fetchJson } from '../../utils/fetch';
import { API_URL } from '../../constants';
import { FetchServiceEndpoint } from '../../types/service';
import { OrderResponse, OrdersResponse } from './types'

const SERVICE_BASE_URL = `${API_URL}/orders/`;


export const getOrders = ( userId?: string ): FetchServiceEndpoint<OrdersResponse[]> => {
	const url = `${SERVICE_BASE_URL}${userId}/`;

	return {
		keys: ['orders-request'],
		fetcher: options =>
			fetchJson<OrdersResponse[]>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};

export const getOrderWithId = (userId?: string,formId?: string): FetchServiceEndpoint<OrderResponse> => {
	
	const url = `${SERVICE_BASE_URL}${userId}/${formId}/`;

	return {
		keys: ['order-request'],
		fetcher: options =>
			fetchJson<OrderResponse>({
				url,
				method: 'GET',
				...options,
			}).then(res => {
				return res;
			}),
	};
};
