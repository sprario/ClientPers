import React from "react";
import { FieldsForm } from "@/types/domain/forms";
import { Table } from "@/components/Layout";


const MasterDBField = (form: FieldsForm) => {
  

  const valForm = form;
  const { description, value } = valForm;
  // console.log(value.rows, 'value')

  const { rows } = value;
  
  
  const columns = description.cols.map(({col_id, name, type}) => {
    return {
      id: col_id,
      title: name
    }
  });

  // console.log(columns, 'columns')
  
  return (
    <>
      <Table columns={columns} data={rows}/>
      <hr className="my-2 md:min-w-full" />
    </>
  );
};

export default MasterDBField;
