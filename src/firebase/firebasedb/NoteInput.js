import React from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';

const NoteInput = ({value, onChange, placeholder}) => (
    <FormGroup>
        <FormControl
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type="text"
        >
        </FormControl>
    </FormGroup>
);

export default NoteInput;