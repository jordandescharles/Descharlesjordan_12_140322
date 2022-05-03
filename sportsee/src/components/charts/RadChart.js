
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';

/**
 * return the middle little chart "spider-web"
 * @param   {object} props userPerformance from App.js
 * @return  {JSX} div className="RadCharts"
 */
export default function RadCharts(props) {
  
  return (
    <div className="RadCharts">
      <ResponsiveContainer width="100%" >
        <RadarChart outerRadius={70} data={props.userPerformance._data}  >
          <PolarGrid radialLines={false} stroke="white" />
          <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} stroke="white" style={{ fontSize: '0.7vw' }} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey="value" stroke="none" fill="red" fillOpacity={0.7}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadCharts.propTypes = {
  userPerformance: PropTypes.shape({
    _data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string
    })),
  })
}