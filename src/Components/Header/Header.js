import React from 'react';

import './Header.css'

const Header = (props) => {
    return (
        <div>
            <div class="container-fluid-2">
                <div class="row">
                    <div class="col-md-4 index-about-section">
                        <div align="center">
                            <img class="index-about-image" src={require(`./assets/${props.image}.png`)} />
                            <h1 class="index-about-name">{props.name}</h1>
                            <h5 class="about-jobTitle">{props.title}</h5>
                            <h6 class="about-location"><i class="fas fa-map-marker-alt"></i>{props.location}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8  index-about-section">
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default Header;