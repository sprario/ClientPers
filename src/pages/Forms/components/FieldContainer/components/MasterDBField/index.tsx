import React from "react";
import { FieldsForm } from "@/types/domain/forms";
import { Table } from "@/components/Layout";


const MasterDBField = (field: FieldsForm) => {
  const valForm = field;
  const { description, value, title } = valForm;


  const { rows } = value;
  
  
  const columns = description.cols.map(({col_id, name, type}) => {
    return {
      key: col_id,
      title: name
    }
  });
  
  return (
    <>
      <Table columns={columns} data={rows} title={title} />
      <hr className="my-2 md:min-w-full" />
    </>
  );
};

export default MasterDBField;
