import React from 'react';
import {
    Grid,
    Row,
    Col,
    Image,
} from 'react-bootstrap'

import './Landing.css';
import { RedirectionButton} from "../Buttons/RedirectionButton";
import img from '../images/imageedit_6_2261919941.png';

const LandingPage = () =>
    <Grid className="landingPage">
        <Row>
            <Col xs={12} md={6} className="landingPage--text">
                <h1 className='landingPage--text__header'>penny-pincher</h1>
                <p className='landingPage--text__para'>Because money matters.</p>

                <RedirectionButton
                    type={'primary'}
                    route={"SignUp"}
                    title={"Try free for 20 days"}/>
            </Col>
            <Col xs={12} md={6} className="landingPage--image">
                <Image src={img} responsive style={{ marginTop: '80px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginBottom: 'auto'}}/>
            </Col>
        </Row>
    </Grid>

export default LandingPage;