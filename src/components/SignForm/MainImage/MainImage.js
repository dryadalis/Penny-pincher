import React from 'react';
import {Col, Image } from 'react-bootstrap';
import './MainImage.css';

export const MainImage = ({src}) =>
    <Col xs={12} md={8} style={{margin: '0', padding: '0'}}>
        <Image src={src} responsive className="mainImage" />
    </Col>;
