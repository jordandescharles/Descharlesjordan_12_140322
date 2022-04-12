
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';


export default function RadCharts(props) {
  /**
   * @description reformat data to display 'cardio' instead of '1' etc ...
   */

  for (let i = 1; i <= 6; i++) {
    props.userPerformance.data[i - 1].kind = props.userPerformance.kind[i]
  }

  return (
    <div className="RadCharts">
            <ResponsiveContainer width="100%" >

      <RadarChart outerRadius={70}  data={props.userPerformance.data}  >
        <PolarGrid radialLines={false} stroke="white" />
        <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} stroke="white" style={{ fontSize: '0.7vw' }} />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar
          dataKey="value"
          stroke="none"
          fill="red"
          fillOpacity={0.7}

        />
      </RadarChart>
      </ResponsiveContainer>

    </div>
  );
}

RadCharts.propTypes = { 
  userPerformance: PropTypes.shape({
    kind: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
      6: PropTypes.string
    }),
    data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number
    })),
  }) 
}