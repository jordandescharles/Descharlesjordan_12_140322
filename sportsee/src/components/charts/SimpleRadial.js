import React from "react";
import {RadialBarChart,RadialBar,ResponsiveContainer} from 'recharts';

export default function SimpleRadial(props) {

  const score = props.userData.todayScore* 100

  /**
   * @description Score * 100 result is placed in an array of object to match the data type for RadialBar
   * 2 datas 1 plain one with the good data to have the good proportions
   */

  const userScore = [
    {
      todayScore: 1.4-props.userData.todayScore,
      fill: '#FBFBFB',
    },
    {
      todayScore: props.userData.todayScore,
      fill: '#E60000',
    },]

  return (
    <div className="SimpleRadial">
      <div className="legend-content">
        <p>Score</p>
        <div className="alignCenter">
          <p className="score-number">{score}%</p>
          <p className="goal-text">de votre objectif</p>
        </div>
      </div>
      <ResponsiveContainer width="90%" >

      <RadialBarChart
  
        innerRadius={70}
        startAngle={90}
        endAngle={460}
        barSize={10}
        data={userScore}
      >
        <RadialBar
          dataKey="todayScore"
          cornerRadius={10}
        />

      </RadialBarChart>
      </ResponsiveContainer>

    </div>
  );
}
