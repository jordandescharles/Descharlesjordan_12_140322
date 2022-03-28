import React from 'react';


const RightIndicator = (img) => {
  
    return (
        <div className='rightBlocks'>
            <div className='CenterBlock'>
                <img src={img.img} alt="pictogramme" />
                <div className='textBlockIndicators'> 
                    <h2>{img.data}</h2>
                    <p>{img.type}</p>
                </div>
            </div>
            
        </div>
    );
};

export default RightIndicator;