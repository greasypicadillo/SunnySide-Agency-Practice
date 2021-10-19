import React from "react";
import './style.css';
import { Row, Col } from 'antd';

const ServicesSection = ({
    headline,
    description,
    img
}) => {
    return (
        <Row className="services-item container">
            <Col span={12} className="serv-text">
                <div className="serv-text-content">
                    <h2 className="serv-header">{headline}</h2>
                    <p className="serv-par">{description}</p>
                    <button className="serv-button">learn more</button>
                </div>
            </Col>
            <Col span={12} className="serv-image-wrap">
                <div className="serv-image" style={{backgroundImage: `url(${img})`}}></div>
            </Col>
        </Row>
    );
};

export default ServicesSection;
