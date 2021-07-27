import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
Button,
Checkbox
} from "@material-ui/core";

export default function Checkboxes() {
   const [checked, setChecked] = React.useState(true);
 
   const handleChange = (event) => {
     setChecked(event.target.checked);
   };
   
 
   return (
     <div>
       <Checkbox
         checked={checked}
         onChange={handleChange}
         inputProps={{ 'aria-label': 'primary checkbox' }}>Available</Checkbox>
       <Checkbox
         checked={checked}
         onChange={handleChange}
         inputProps={{ 'aria-label': 'primary checkbox' }}>Sold</Checkbox>
       <Checkbox
         checked={checked}
         onChange={handleChange}
         inputProps={{ 'aria-label': 'primary checkbox' }}>Pending</Checkbox>
       
       
     </div>
   );
 }