export interface Fields {
	type: string;
	label: string;
	value: string;
}

export interface OrderResponse {
	_id: string;
	name: string;
	fields: Fields[];
}

export interface FormsRequest {
	userId: string;
}

export interface OrdersResponse {
	_id: string;
	creationAt: string;
}
