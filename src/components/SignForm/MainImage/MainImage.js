import React from 'react';
import {Col, Image } from 'react-bootstrap';
import img from '../../images/rawpixel-570908-unsplash.jpg';
import './MainImage.css';

export const MainImage = () =>
    <Col xs={12} md={8} style={{margin: '0', padding: '0'}}>
        <Image src={img} responsive className="mainImage" />
    </Col>;
