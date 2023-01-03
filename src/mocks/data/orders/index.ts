import { OrdersResponse } from '@/services/orders/types';

export const responseOrderSuccess = {
	id: '123',
	name: 'Orden de Trabajo 123',
	fields: [
		{
			type: 'text',
			label: 'Tarea',
			value: 'Conectar Servicio',
		},
		{
			type: 'text',
			label: 'Cliente',
			value: 'Perez',
		},
		{
			type: 'date',
			label: 'Fecha',
			value: '2 de Enero de 2023',
		},
	],
};

export const responseOrders:OrdersResponse[] = [
	{
		id: '123',
		creationAt: '2022-12-20T14:01:23.552Z',
	},
	{
		id: '124',
		creationAt: '2022-12-20T14:01:23.552Z',
	},
	{
		id: '125',
		creationAt: '2022-12-20T14:01:23.552Z',
	},
	{
		id: '126',
		creationAt: '2022-12-20T14:01:23.552Z',
	},
	{
		id: '127',
		creationAt: '2022-12-20T14:01:23.552Z',
	},
	{
		id: '128',
		creationAt: '2022-12-20T14:01:23.552Z',
	},
];
