import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ReactSVG from 'react-svg';
import img1 from '../images/undraw_credit_card_payment_12va.svg';
import img2 from '../images/undraw_finance_0bdk.svg';
import img3 from '../images/undraw_make_it_rain_iwk4.svg';
import './Landing2.css';

const LandingPage2 = () =>
    <Grid className='landingPage2'>
        <Row className='landingPage2--wrapper'>
            <Col xs={12} md={4} className="landingPage2--column">
                <ReactSVG src={img1}/>
                <div className='landingPage2--text'>
                    <h3>Money tracker</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce varius porttitor ex id lobortis.
                    </p>
                </div>
            </Col>
            <Col xs={12} md={4} className="landingPage2--column">
                <ReactSVG src={img2} />
                <div className='landingPage2--text'>
                    <h3>Saving plan</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce varius porttitor ex id lobortis.
                    </p>
                </div>
            </Col>
            <Col xs={12} md={4} className="landingPage2--column">
                <ReactSVG src={img3}/>
                <div className='landingPage2--text'>
                    <h3>Expenditure control</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce varius porttitor ex id lobortis.
                    </p>
                </div>
            </Col>
        </Row>
    </Grid>

export default LandingPage2;