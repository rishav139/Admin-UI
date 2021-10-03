import React from "react";
import MaterialTable from "material-table";
import { Delete } from "@material-ui/icons";
import lists from '../data.json';

const Admin = () => {

  const { useState } = React;

  const [columns, setColumns] = useState([
    { 
      title: 'ID', 
      field: 'id', 
      headerStyle: {
        color: "red"
      } 
    },
    { 
      title: 'Name', 
      field: 'name',
      headerStyle: {
        color: "red"
      } 
     },
    { 
      title: 'Email', 
      field: 'email',
      headerStyle: {
        color: "red"
      } 
     },
    { 
      title: 'Role', 
      field: 'role',
      headerStyle: {
        color: "red"
      }  
    }
  ]);

  const [data, setData] = useState(lists);

  const handleDeleteRows = (event, rowData) => {
    let _data = [...data];
    rowData.forEach(rd => {
      _data = _data.filter(t => t.tableData.id !== rd.tableData.id);
    });
    setData(_data);
  };

  return (
    <MaterialTable
      title="Admin UI"
      columns={columns}
      data={data}

      options={{
        selection: true,
        sorting: true,
        search: true,
        pageSize: 10,
        actionsColumnIndex: -1,
        addRowPosition: "first"
      }}

      actions={[
        {
            icon: () => <Delete />,
            tooltip: "Delete Rows",
            onClick: handleDeleteRows
        },
        
      ]}


      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          })
      }}
    />
  )
}



export default Admin;