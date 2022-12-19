export interface Fields {
	type: string;
	label: string;
	value: string;
}

export interface FormResponse {
	id: string;
	name: string;
	fields: Fields[];
}

export interface FormsRequest {
	userId: string;
}

export interface FormsResponse {
	formId: string;
	creationAt: Date;
}
