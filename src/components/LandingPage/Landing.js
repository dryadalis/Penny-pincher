import React from 'react';
import {
    Grid,
    Row,
    Col,
    Image,
} from 'react-bootstrap'

import './Landing.css';
import { RedirectionButton} from "../Buttons/RedirectionButton";
import img from '../images/Layer 0.png';
import AuthUserContext from '../../firebase/firebasedb/auth/AuthUserContext';
import MainButton from "../Buttons/MainButton";
import LandingPage2 from "./Landing2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';



const LandingPage = () =>
    <Grid style={{paddingRight:'0'}}>
        <Row className="landingPage">
            <Col xs={12} md={6} className="landingPage--text">
                <div className='landingPage--icons'>
                    <a href="https://facebook.com/" target="_blank" title="Facebook"><FontAwesomeIcon icon={faFacebookF} size='2x'/></a>
                    <a href="https://www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} size='2x'/></a>
                    <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
                </div>
                <h1 className='landingPage--text__header'>penny-pincher</h1>
                <p className='landingPage--text__para'>Because money matters.</p>
                <AuthUserContext.Consumer>
                    {authUser=> authUser
                        ?  <MainButton
                        type={'primary'}
                        size={'large'}
                        title={"Learn more"}
                        />
                        : <RedirectionButton
                            type={'primary'}
                            size={'large'}
                            route={"SignUp"}
                            title={"Try free for 20 days"}
                        />
                    }
                </AuthUserContext.Consumer>
            </Col>
            <Col xs={12} md={6} style={{paddingRight: '0'}}>
                <Image src={img} responsive className="landingPage--image"/>
            </Col>
        </Row>
        <Row style={{marginRight: '0'}}>
            <LandingPage2 />
        </Row>
    </Grid>

export default LandingPage;