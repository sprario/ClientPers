export interface Fields {
	type: string;
	label: string;
	value: string;
}

export interface OrderResponse {
	id: string;
	name: string;
	fields: Fields[];
}

export interface FormsRequest {
	userId: string;
}

export interface OrdersResponse {
	id: string;
	creationAt: string;
}
