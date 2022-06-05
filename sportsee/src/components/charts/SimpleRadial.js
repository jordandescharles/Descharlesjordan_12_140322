import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * return the first little chart that draws a line 
 * @param   {object} props userAverage from App.js
 * @return  {JSX} div className="SimpleRadial"
 */
export default function SimpleRadial(props) {

/**
  * @type {object}
  * @property {string} todayScore - calculation 1,4 - todayScore so we get the right fill lenght.
  * @property {string} fill - fill color HEX value.
 */
  const userScore = [
    {
      todayScore: 1.4 - (props.userData._todayScore/100),
      fill: '#FBFBFB',
    },
    {
      todayScore: (props.userData._todayScore/100),
      fill: '#E60000',
    },]

  return (
    <div className="SimpleRadial">
      <div className="legend-content">
        <p>Score</p>
        <div className="alignCenter">
          <p className="score-number">{props.userData._todayScore}%</p>
          <p className="goal-text">de votre objectif</p>
        </div>
      </div>
      <ResponsiveContainer width="90%" >
        <RadialBarChart innerRadius={70} startAngle={90} endAngle={460} barSize={10} data={userScore}>
          <RadialBar dataKey="todayScore" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

SimpleRadial.propTypes = {
  userData: PropTypes.shape({
  _todayScore: PropTypes.number,
  })
}