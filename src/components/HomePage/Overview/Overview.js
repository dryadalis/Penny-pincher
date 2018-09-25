import React from 'react';
import SumAllExpenses from './SumAllExpenses';
import './Overview.css';
import CurrentData from './CurrentData';
const Overview = () =>
    <div style={{display:'flex', justifyContent: 'center'}}>
        <div className="overview--wrapper">
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <h3 className="overview--header">Overview</h3>
                <CurrentData/>
            </div>
            <hr />
            <div>
                <SumAllExpenses />
            </div>
        </div>
    </div>;

export default Overview;