import React from "react";
import {RadialBarChart,RadialBar,} from 'recharts';

export default function SimpleRadial(props) {

  const score = props.score * 100

  /**
   * @description Score * 100 result is placed in an array of object to match the data type for RadialBar
   * 2 datas 1 plain one with the good data to have the good proportions
   */

  const userScore = [
    {
      todayScore: 1 - props.score,
      fill: '#FBFBFB',
    },
    {
      todayScore: props.score,
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
      <RadialBarChart
        width={258}
        height={263}
        cx={129}
        cy={129}
        innerRadius={70}
        startAngle={90}
        endAngle={486}
        barSize={10}
        data={userScore}
      >
        <RadialBar
          minAngle={10}
          dataKey="todayScore"
          cornerRadius={10}
        />

      </RadialBarChart>
    </div>
  );
}