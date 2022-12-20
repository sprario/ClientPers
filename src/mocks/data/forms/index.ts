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
		id: '12680',
		creationAt: '2022-12-19T14:01:23.552Z',
	},
	{
		id: '14865',
		creationAt: '2022-12-18T14:01:23.552Z',
	},
	{
		id: '24685',
		creationAt: '2022-12-17T14:01:23.552Z',
	},
	{
		id: '32068',
		creationAt: '2022-12-19T14:01:23.552Z',
	},
	{
		id: '32404',
		creationAt: '2022-12-19T14:01:23.552Z',
	},
	{
		id: '54648',
		creationAt: '2022-12-19T04:01:23.552Z',
	},
	{
		id: '32000',
		creationAt: '2022-12-10T10:01:23.552Z',
	},

	{
		id: '32451',
		creationAt: '2022-12-10T12:01:23.552Z',
	}
];
