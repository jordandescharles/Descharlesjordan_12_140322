
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
];

export default function RadCharts() {
    
  return (
      <div className="RadCharts">
    <RadarChart outerRadius={100} width={258} height={263} data={data} >
      <PolarGrid radialLines={false} stroke="white"/>
      <PolarAngleAxis dataKey="kind" axisLine={false} stroke="white"/>
      <PolarRadiusAxis  axisLine={false} tick={false}/>
      <Radar
        name="Mike"
        dataKey="value"
        stroke="none"
        fill="red"
        fillOpacity={0.7}
        
        
      />
    </RadarChart>
    </div>
  );
}
