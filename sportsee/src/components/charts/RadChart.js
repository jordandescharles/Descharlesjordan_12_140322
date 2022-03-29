
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";


export default function RadCharts(props) {

  /**
   * @description reformat data to display 'cardio' instead of '1' etc ...
   */

  for (let i = 1; i <= 6; i++) {
    props.radData.data[i - 1].kind = props.radData.kind[i]
  }

  return (
    <div className="RadCharts">
      <RadarChart outerRadius={70} width={258} height={263} data={props.radData.data}  >
        <PolarGrid radialLines={false} stroke="white" />
        <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} stroke="white" style={{ fontSize: '12px' }} />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar
          dataKey="value"
          stroke="none"
          fill="red"
          fillOpacity={0.7}

        />
      </RadarChart>
    </div>
  );
}