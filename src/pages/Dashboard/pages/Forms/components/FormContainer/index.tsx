import React, { FunctionComponent } from 'react';
import { useParams } from "react-router-dom";
import { responseFormSuccess } from '../../../../../../mocks/data/forms';
import { Input } from '../../../../../../components/';


const FormContainer: FunctionComponent = () => {
    const params = useParams();

    const { name, id, fields } = responseFormSuccess;
    
    return (
        <div>
            <h2>{name}</h2>
            <h4>ID : {id}</h4>
            {fields && fields.map(field => (
                <div className='w-full shadow rounded-lg p-2 border-zinc-500 wd-64'>
                  <p>{field.label}</p>
                  <p>{field.value}</p>
                </div>
            ))}
        </div>
    );
};

export default FormContainer;
