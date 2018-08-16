import React from 'react';
import { Col } from 'react-bootstrap';
import './MainForm.css';
const MainForm = ({title, children}) => (
    <Col xs={12} md={4} className='mainForm--container'>
        <h1 className="mainForm--header">{title}</h1>
        {
            children
        }
    </Col>
);

export default MainForm;