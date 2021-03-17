import React from 'react';

import './Header.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = (props) => {
    return (
        <div>
            <Container className="p-5">
                <Row>
                    <Col md={4} className="index-about-section">
                        <div align="center">
                            <img class="index-about-image" src={require(`./assets/${props.image}.png`)} />
                            <h1 class="index-about-name">{props.name}</h1>
                            <h5 class="about-jobTitle">{props.title}</h5>
                            <h6 class="about-location"><i class="fas fa-map-marker-alt"></i>{props.location}</h6>
                        </div>
                    </Col>
                    <Col md={8} className="index-about-section">
                        <p className="index-about-section-p">{props.content}</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
};

export default Header;