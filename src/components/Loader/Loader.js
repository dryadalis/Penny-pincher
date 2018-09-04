import React from 'react';
import './loader.css';

const Loader = ({title, className}) => (
    <div className="loader-wrapper">
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <br />
        <h4 className={className}>{title}</h4>
    </div>
    );

export {Loader};