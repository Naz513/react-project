import React from 'react';

import './SectionBreaker.css';
import Container from 'react-bootstrap/Container';

const SectionBreaker = (props) => {
    return (
        <Container>
            <h1>{props.content}</h1>
            <div className="hr" />
        </Container>

    )
};

export default SectionBreaker;
