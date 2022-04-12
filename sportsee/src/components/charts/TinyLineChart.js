import * as React from "react";
import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';


/**
 * CustomTooltip is used to customise the hover box on the graph  line
 */

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip custom-tooltip_white">
        <p className="label">{`${payload[0].value}Min`}</p>
      </div>
    );
  }
  return null;
}

/**
 * return the first little chart that draws a line 
 * @param   {object} props userAverage from App.js
 * @return  {JSX} div className="TinyLineChart"
 */
export default function TinyLineChart(props) {

  return (
    <div className="TinyLineChart">
      <p className="Ptext"> Durée moyenne des sessions</p>
      <ResponsiveContainer width="80%" height="60%" >
        <LineChart data={props.userAverage.sessions}>
          <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="white" dy={0} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

TinyLineChart.propTypes = {
  userAverage: PropTypes.shape({
    sessions: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number
    }))
  })
}
