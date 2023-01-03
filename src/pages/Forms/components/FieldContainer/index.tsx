import React, { FunctionComponent } from 'react';
import { DateField, TextField, SelectionField, SignatureField } from './components';
import { FieldsForm } from '@/types/domain/forms';


const FieldContainer: FunctionComponent<FieldsForm> = (props: FieldsForm ) => {
  if(!props.value) return null

  const renderTypes = {
    TEXT_FIELD: (<TextField {...props} />),
    LABEL_FIELD: (<TextField {...props} />),
    NUMBER_FIELD: (<TextField {...props} />),
    NEW_SECTION: (<TextField {...props} />),
    STATIC_FIELD: (<TextField {...props} />),
    LINK_FIELD: (<TextField {...props} />),
    DROPDOWN_SELECTION: (<TextField {...props} />),
    SIMPLE_SELECTION: (<TextField {...props} />),
    MULTIPLE_SELECTION: (<SelectionField {...props} />),
    TEXT_PARAGRAPH: (<TextField {...props} />),
    DATE_FIELD: (<DateField {...props} />),
    TIME_FIELD: (<DateField {...props} />),
    SIGNATURE_FIELD: (<TextField {...props} />),
    SIGNATURES_FIELD_V2: (<SignatureField {...props} />),
  }  
  
  return (
    <>
      {renderTypes[props.widget_type  as keyof typeof renderTypes]}
    </>
    
  );
};

export default FieldContainer;
