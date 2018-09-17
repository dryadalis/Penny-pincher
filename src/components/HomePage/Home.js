import React from 'react';
import './home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import GetFromDb from '../../firebase/firebasedb/GetFromDb';
import withAuthorization from '../withAuthorization';


const HomePage = () =>
    <Grid className="main-box">
        <Row>
            <Col xs={12}>
                <h1 className='home--header'>Your Wallet</h1>
                <GetFromDb />
            </Col>
        </Row>
    </Grid>
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);