import React from 'react';

import './FeaturedProjects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeaturedProjects = (props) => {
    return (
        <Container className="Learn-More-Project-Container">
            <Row>
                <Col md={8} className="LearnMoreProject-text">
                    <h2>{props.date}</h2>
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                    {/* <a href={require(`./content/projects/${props.projectLink}.html`)}>Learn More</a> */}
                    <a href="/content/projects/{props.projectLink}.html">Learn More</a>
                </Col>
                <Col md={4} className="LearnMoreProject-img">
                    <img src={require(`./assets/${props.image}.jpeg`)} />
                </Col>
            </Row>
        </Container>

    )
};

export default FeaturedProjects;