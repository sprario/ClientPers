import { FormsResponse } from '@/services/forms/types';

export const responseFormSuccess = {
	id: '120',
	name: 'Formulario XXX',
	fields: [
		{
			type: 'text',
			label: 'Nombre',
			value: 'Carlos',
		},
		{
			type: 'text',
			label: 'Apellido',
			value: 'Perez',
		},
		{
			type: 'date',
			label: 'Fecha',
			value: '11 de Marzo de 2023',
		},
		{
			type: 'text',
			label: 'Monto',
			value: '$ 5400,00',
		},
	],
};

export const responseForms:FormsResponse[] = [
	{
		formId: '120',
		creationAt: new Date(),
	},
	{
		formId: '145',
		creationAt: new Date(),
	},
	{
		formId: '245',
		creationAt: new Date(),
	},
	{
		formId: '320',
		creationAt: new Date(),
	},
	{
		formId: '321',
		creationAt: new Date(),
	}
];
