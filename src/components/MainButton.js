import React from 'react';
import { Button } from 'react-bootstrap';


const MainButton = ({ title, onClick }) => (
    <Button
        type='button'
        onClick={onClick}
    >
        {title}
    </Button>
);

export default MainButton;
