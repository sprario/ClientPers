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
		creationAt: new Date(),
	},
	{
		id: '14865',
		creationAt: new Date(-1),
	},
	{
		id: '24685',
		creationAt: new Date(-2),
	},
	{
		id: '32068',
		creationAt: new Date(-3),
	},
	{
		id: '32404',
		creationAt: new Date(-3),
	},
	{
		id: '54648',
		creationAt: new Date(-3),
	},
	{
		id: '32000',
		creationAt: new Date(-3),
	},

	{
		id: '32451',
		creationAt: new Date(-4),
	}
];
