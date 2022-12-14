export interface Forms {
	type: string;
	label: string;
	value: string;
}

export interface FormsResponseSuccess {
	id: string[];
}

export interface FormResponse {
	id: string;
	name: string;
	fields: Forms[];
}

export interface FormsRequest {
	user: string;
	idForm?: string;
}
