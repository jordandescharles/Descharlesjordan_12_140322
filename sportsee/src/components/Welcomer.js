import React from 'react';

const Welcomer = (props) => {
    console.log(props)
    const userName = props.data.userInfos.firstName;
   
    return (
        <>
            <h1>Bonjour <span className="redName">{userName}</span></h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </>
    );
};

export default Welcomer;