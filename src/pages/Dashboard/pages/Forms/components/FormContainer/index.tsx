import React, { FunctionComponent } from 'react';
import { useParams } from "react-router-dom";


const FormContainer: FunctionComponent = () => {
    const params = useParams();

    const form = {
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
                type: 'amount',
                label: 'Monto',
                value: '$ 5400,00',
            },
        ]
    }
    
    return (
        <div>
            <h2>{form.name}</h2>
            <h4>ID : {form.id}</h4>
        </div>
    );
};

export default FormContainer;
