import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div class="container-fluid-2">
                <div class="row">
                    <div class="col-md-4 index-about-section">
                        <div align="center">
                            <img class="index-about-image" src="../assets/profile.png"></img>
                            <h1 class="index-about-name">{props.name}</h1>
                            <h5 class="about-jobTitle">{props.title}</h5>
                            <h6 class="about-location"><i class="fas fa-map-marker-alt"></i>{props.location}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;