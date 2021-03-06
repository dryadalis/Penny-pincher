import React from 'react';
import './home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import GetFromDb from '../ExpenseList/GetFromDb';
import withAuthorization from '../../../firebase/firebasedb/auth/withAuthorization';


const HomePage = () =>
    <Grid className="main-box">
        <Row style={{margin: '0'}}>
            <Col xs={12} className='home--wrapper'>
                <h1 className='home--header'>Your Wallet</h1>
                <GetFromDb />
            </Col>
        </Row>
    </Grid>
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);