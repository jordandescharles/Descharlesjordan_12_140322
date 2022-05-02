import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for showing user Name.
 * @param   {object} props userDatas from App.js
 * 
 * @component
 * @example
 * const userName = 'jordan'
 * return (
 *   Bonjour jordan
 *   Félicitation ! Vous avez explosé vos objectifs hier 👏
 * )
 */
export default function Welcomer(props) {
  
   const userName = props.userData._userInfos.firstName;
    return (
        <>
          <h1>Bonjour <span className="redName">{userName}</span></h1> 
            <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </>
    );
};

 Welcomer.propTypes = {  
     userData: PropTypes.shape({
         _userInfos: PropTypes.shape({
             firstName: PropTypes.string,
         }),
       })
     }