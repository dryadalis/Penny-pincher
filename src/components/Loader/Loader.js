import React from 'react';
import './loader.css';

const Loader = () => (
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
        <h4 style={{color: '#ff00ccc'}}>Adding...</h4>
    </div>
    );

export {Loader};