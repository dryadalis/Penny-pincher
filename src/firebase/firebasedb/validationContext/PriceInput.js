import React from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';

const PriceInput = ({value, onChange, placeholder}) => (
        <FormGroup>
            <FormControl
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min='0'
                type='number'
            >
            </FormControl>
        </FormGroup>
);

export default PriceInput