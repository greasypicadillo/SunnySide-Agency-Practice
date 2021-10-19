import React from 'react';
import { Row, Col } from 'antd';

const ServLastSection = ({ pageData }) => {

    const designData = pageData.obj1;
    const photoData = pageData.obj2;

    return (
        <Row className="services-item services-lastitem container" id="services">
            <Col span={12} className="serv-text" style={{backgroundImage: `url(${designData.img})`}}>
                <div className="serv-text-content" style={{color: "hsl(167, 40%, 24%)"}}>
                    <h2 className="serv-header" >{designData.headline}</h2>
                    <p className="serv-par">{designData.description}</p>
                </div>
            </Col>
            <Col span={12} className="serv-text" style={{backgroundImage: `url(${photoData.img})`}}>
                <div className="serv-text-content" style={{color: "hsl(198, 62%, 26%)"}}>
                    <h2 className="serv-header" >{photoData.headline}</h2>
                    <p className="serv-par">{photoData.description}</p>
                </div>
            </Col>
        </Row>
    )
}

export default ServLastSection
