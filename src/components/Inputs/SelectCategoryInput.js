import React from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';

const SelectCategoryInput = ({value, onChange,}) => (
       <FormGroup>
           <FormControl
               componentClass='select'
               value={value}
               onChange={onChange}
               className="selectInput"
           >
               <option value="" defaultValue disabled>Select category</option>
               <option value="bills&utilities">Bills & Utilities</option>
               <option value="business">Business</option>
               <option value="entertainment">Entertainment</option>
               <option value="health">Health</option>
               <option value="fuel">Fuel</option>
               <option value="food">Food</option>
               <option value="transport">Transport</option>
               <option value="shopping">Shopping</option>
               <option value="home">Home</option>
               <option value="other">Other</option>
           </FormControl>
       </FormGroup>
);

export default SelectCategoryInput;