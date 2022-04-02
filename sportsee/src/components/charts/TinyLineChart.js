import * as React from "react";
import { LineChart, Line, Tooltip, XAxis } from "recharts";



/**
 * CustomTooltip is used to customise the hover on the line
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

export default function TinyLineChart(props) {
  return (
    <div className="TinyLineChart">
      <p className="Ptext"> Durée moyenne des sessions</p>
      <LineChart width={240} height={140} data={props.data}>
        <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="white" dy={0} />

        <Tooltip content={<CustomTooltip />} />

        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
      </LineChart>

    </div>
  );
}


