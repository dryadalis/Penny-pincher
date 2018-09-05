import React from 'react';
import SumAllExpenses from './SumAllExpenses';
import './Overview.css';
const Overview = () =>
    <div style={{display:'flex', justifyContent: 'center'}}>
        <div className="overview--wrapper">
            <h3>Overview</h3>
            <hr />
            <div>
                <SumAllExpenses />
            </div>
        </div>
    </div>;

export default Overview;