import React from 'react';
import {
    Grid,
    Row,
    Col,
    Button,
} from 'react-bootstrap'
import { RedirectionButton } from "../RedirectionButton";


const LandingPage = () =>
    <Grid>
        <Row>
            <Col xs={12} md={8}>
                <h1>penny-pincher</h1>
                <p>Because money matters</p>
                <RedirectionButton route={"SignUp"} title={"Try free for 20 days"}/>
            </Col>
        </Row>
    </Grid>

export default LandingPage;