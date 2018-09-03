import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

const HomePageWithoutData = () =>
    <div style={{marginTop: '100px', textAlign: 'center'}}>
        <p style={{fontSize: '40px', color: 'white'}}>
            No saved expenses,
            <br />tap <FontAwesomeIcon icon={faPlusCircle} style={{color: '#00cccc'}}/> to add one.
        </p>
    </div>;

export default HomePageWithoutData;