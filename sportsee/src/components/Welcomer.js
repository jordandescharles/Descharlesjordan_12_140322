import React from 'react';
import PropTypes from 'prop-types';

const Welcomer = (props) => {
    const userName = props.userData.userInfos.firstName;

    return (
        <>
            <h1>Bonjour <span className="redName">{userName}</span></h1>
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </>
    );
};

export default Welcomer;

Welcomer.propTypes = {  
    userData: PropTypes.shape({
        userInfos: PropTypes.shape({
            firstName: PropTypes.string,
        }),
      })
    }