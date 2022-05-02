import Yoga from "../img/icon1.png"
import Swim from "../img/icon2.png"
import Bike from "../img/icon3.png"
import Fit from "../img/icon4.png"

import React from 'react';

const LeftNav = () => {
    return (
        <nav id="naVertical">
            <ul>
                <li><img src={Yoga} alt="yoga" /></li>
                <li><img src={Swim} alt="natation" /></li>
                <li><img src={Bike} alt="velo" /></li>
                <li><img src={Fit} alt="fitness" /></li>
            </ul>
            <span className="verticalText"> Copyright, SportSee 2020</span>
        </nav>
    );
};

export default LeftNav;