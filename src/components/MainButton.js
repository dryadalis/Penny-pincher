import React from 'react';
import { Button } from 'react-bootstrap';


const MainButton = ({ title, onClick, className }) => (
    <Button
        type='submit'
        onClick={onClick}
        className={className}
    >
        {title}
    </Button>
);

export default MainButton;
