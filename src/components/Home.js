import React from 'react';
import './home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import Popup from './Popup'

class HomePage extends React.Component {
    render() {
        return(
            <Grid className="main-box">
                <Row>
                    <Col xs={12}>
                          <h1 className='home--header'>Your Wallet</h1>
                        <Popup/>
                    </Col>
                </Row>

            </Grid>
        );
    }
}
export default HomePage;