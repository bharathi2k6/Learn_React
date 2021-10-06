import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Autowired } from 'ag-grid-community';

const Newbutton = (props:any) =>{
  const Clickmeation = () =>{
   alert('Id ' + props.params.data.id +  "  Name " +props.params.data.name);
  }
 return (<>
   <button onClick={Clickmeation}>Click Me</button>
 </>)
}
export default Newbutton;