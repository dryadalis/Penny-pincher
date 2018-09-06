import React from 'react';
import './home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import GetFromDb from '../../firebase/firebasedb/GetFromDb';
import UpdateDataFromDb from '../../firebase/firebasedb/UpdateDataFromDb';
class HomePage extends React.Component {
    render() {
        return(
            <Grid className="main-box">
                <Row>
                    <Col xs={12}>
                          <h1 className='home--header'>Your Wallet</h1>
                        <GetFromDb />
                        <UpdateDataFromDb />
                    </Col>
                </Row>

            </Grid>
        );
    }
}
export default HomePage;