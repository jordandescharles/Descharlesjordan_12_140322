
import React from "react";
import {
  RadialBarChart,
  RadialBar,
} from 'recharts';

const data = [ {
 
  score: 0.12
  
}];

export default function SimpleRadial(dat){ 
  
  const score= dat.score*(100)
  console.log(data)
  return (
<div className="SimpleRadial">
 <p>Score</p>
 <div >
        
                <div className="legend-content">
                    <p className="score-number">{score}%</p>
                    <p className="goal-text">de votre objectif</p>
                </div>
  
                <RadialBarChart
                  width={500}
                  height={300}
                  cx={150}
                  cy={150}
                  innerRadius={70}
                  outerRadius={90}
                  barSize={10}
                  startAngle={90}
                  endAngle={score*3.6}
                  data={data}
                >
                  <RadialBar
                       minAngle={15}
                       dataKey="score"
                       anticlockWise
                       fill="red"
                       cornerRadius={10}
                  />
                  
                </RadialBarChart>
         
        </div>
        </div>
  );
}
