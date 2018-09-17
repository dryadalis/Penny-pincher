import React from 'react';
import {FormControl, FormGroup} from 'react-bootstrap';
import './MainInput.css';

const MainInput = ({value, onChange, type, placeholder,}) => (
        <FormControl
            className="sign--input"
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
);


export default MainInput;