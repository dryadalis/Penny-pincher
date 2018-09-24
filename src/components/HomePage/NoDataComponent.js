import React from 'react';
import AddModal from '../../../components/HomePage/AddModal/AddModal'

const HomePageWithoutData = () =>
    <div style={{marginTop: '90px', textAlign: 'center'}}>
        <p style={{color: 'white', fontSize: '36px', margin: '30px'}}>
            No saved expenses, tap
        </p>
            <AddModal />
        <p style={{color: 'white', fontSize: '36px', margin: '30px'}}>
            to add one.
        </p>
    </div>;

export default HomePageWithoutData;