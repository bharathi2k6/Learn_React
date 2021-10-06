import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Autowired } from 'ag-grid-community';
import Newbutton from './Newbutton';

const Actionbutton = () =>{
    const data =[
        {id:1,name:'Bharathi' , age:32},
        {id:2,name:'Max' , age:30},
        {id:3,name:'John' , age:35},
        {id:4,name:'Abraham' , age:40},
        {id:5,name:'Arnault' , age:72},
        {id:6,name:'Forbes' , age:59},
        {id:7,name:'Jeff Bezos' , age:50},
        {id:8,name:'Franck' , age:52}
      ];
      const columns = [
        {
            headerName:"Id", field:'id',checkboxSelection:true
        },
          {
              headerName:"Name", field:'name'
          },
          {
              headerName:"age", field:'age',cellStyle:(params:any)=>(params.value > 40 ? {borderLeft:"4px green solid"}:{borderLeft:"4px red solid"})
          },
          {
            headerName:"Action", field:'id',cellRendererFramework:(params:any)=><div><Newbutton params={params} /></div>
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
export default Actionbutton;
