import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Autowired } from 'ag-grid-community';

const Aggrid = () =>{
    const data =[
      {name:'Bharathi' , age:32},
      {name:'Max' , age:30},
      {name:'John' , age:35},
      {name:'Abraham' , age:40},
      {name:'Arnault' , age:72},
      {name:'Forbes' , age:59},
      {name:'Jeff Bezos' , age:50},
      {name:'Franck' , age:52}
    ];
    const columns = [
        {
            headerName:"Name", field:'name',checkboxSelection:true
        },
        {
            headerName:"age", field:'age'
        }
    ]
    const defaultColDef = {
        sortable:true,editable:true,filter:true,floatingFilter:true,flex:1
    }
    let gridAPi:any;

    const onReady = (params:any) =>{
        gridAPi = params.api;
    }
    const exportData = () => {
        gridAPi.exportDataAsCsv();
    }
    return(
        <>
        <p>Ag Grid</p>
        <button onClick={exportData}>Export</button>
        <div className="ag-theme-alpine" style={{height: 400}}>
            <AgGridReact rowData={data} columnDefs={columns} defaultColDef={defaultColDef} onGridReady={onReady}/>
        </div>
        </>
    )
}
export default Aggrid;