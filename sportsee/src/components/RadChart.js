
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";


export default function RadCharts(data) {

  for(let i=1 ; i <= 6; i ++ ){
    data.data.data[i-1].kind = data.data.kind[i]
  }


  return (
      <div className="RadCharts">
    <RadarChart outerRadius={70} width={258} height={263} data={data.data.data}  >
      <PolarGrid radialLines={false} stroke="white"  />
      <PolarAngleAxis dataKey="kind" axisLine={false}  tickLine={false}  stroke="white" style={{fontSize: '12px'}} />
      <PolarRadiusAxis  axisLine={false} tick={false}  />
      <Radar
        dataKey= "value"
        stroke="none"
        fill="red"
        fillOpacity={0.7}
        
      />
    </RadarChart>
    </div>
  );
}
