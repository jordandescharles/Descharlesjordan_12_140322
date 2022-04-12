import React from 'react';
import PropTypes from 'prop-types';

/**
 * return right blocks KCal,Prot,Fat,Carbs
 * @param   {object} props img of category + data + category's name  
 * @return  {JSX} one Div className='rightBlocks'
 */
export default function  RightIndicator(props) {

    return (
        <div className='rightBlocks'>
            <div className='CenterBlock'>
                <img src={props.img} alt="pictogramme" />
                <div className='textBlockIndicators'>
                    <h2>{props.data}</h2>
                    <p>{props.type}</p>
                </div>
            </div>
        </div>
    );
};

RightIndicator.propTypes = {  
    img: PropTypes.string,
    data:PropTypes.string,
    type:PropTypes.string
}