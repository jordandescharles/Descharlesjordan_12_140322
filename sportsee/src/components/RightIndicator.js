import React from 'react';

const RightIndicator = (props) => {

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

export default RightIndicator;