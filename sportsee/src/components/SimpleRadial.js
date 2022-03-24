
import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

const data = [
  {    
      todayScore: 0.12

  }
];


export default function SimpleRadial() {
  return (
<div className="SimpleRadial">
 <p>Score</p>
    <RadialBarChart
      width={240}
      height={240}
      cx={120}
      cy={90}
      innerRadius={80}
      outerRadius={100}
      barSize={8}
      data={data}
    >
      <RadialBar
        minAngle={0}
        background
        clockWise
        dataKey="todayScore"
        fill="red"
        
        
      />
  
    </RadialBarChart></div>
  );
}
