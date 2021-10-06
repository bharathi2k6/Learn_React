import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Autowired } from 'ag-grid-community';

const Restapi = () =>{
      const columns = [
        {
            headerName:"Id", field:'id',checkboxSelection:true,headerCheckboxSelection:true,cellStyle:(params:any)=>({Width:50})
        },
        {
            headerName:"PostId", field:'postId',cellStyle:(params:any)=>({Width:50})
        },
        {
        headerName:"Name", field:'name',cellStyle:(params:any)=>({Width:200})
        },
        {
            headerName:"E-Mail", field:'email',cellStyle:(params:any)=>({Width:200})
        },
        {
            headerName:"Body", field:'body',cellStyle:(params:any)=>({Width:500})
        } 
      ]
      const defaultColDef = {
          sortable:true,editable:true,filter:true,floatingFilter:true,flex:1
      }
      let gridAPi:any;
  
      const onReady = (params:any) =>{
          fetch("https://jsonplaceholder.typicode.com/comments")
          .then(resp=>resp.json()
          .then(resp=>
            params.api.applyTransaction({add:resp})
          ));
          gridAPi = params.api;
      }
      const exportData = () => {
          gridAPi.exportDataAsCsv();
      }
     /* const rowSelectionType = 'single'; */
       const rowSelectionType = 'multiple'; 

      const OnChangeData = (event:any) =>{
        console.log(event.api.getSelectedRows());
      }
      const isRowSelectable = (node:any) =>{
          return true;
      }
      return(
          <>
          <p>Ag Grid</p>
          <button onClick={exportData}>Export</button>
          <div className="ag-theme-alpine" style={{height: 550}}>
              <AgGridReact  columnDefs={columns} defaultColDef={defaultColDef} onGridReady={onReady}
               rowSelection={rowSelectionType}
               onSelectionChanged={OnChangeData}
               rowMultiSelectWithClick={true} 
               isRowSelectable={isRowSelectable}
               pagination = {true}
               paginationPageSize={25}
               paginationAutoPageSize={true} />
          </div>
          </>
      )
}
export default Restapi;