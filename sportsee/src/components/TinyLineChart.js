import * as React from "react";
import { LineChart, Line,Tooltip, XAxis } from "recharts";

const data = [
  
    {
        day: 1,
        sessionLength: 30
    },
    {
        day: 2,
        sessionLength: 40
    },
    {
        day: 3,
        sessionLength: 50
    },
    {
        day: 4,
        sessionLength: 30
    },
    {
        day: 5,
        sessionLength: 30
    },
    {
        day: 6,
        sessionLength: 50
    },
    {
        day: 7,
        sessionLength: 50
    }
];

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
  

export default function TinyLineChart() {
  return (
     <div className="TinyLineChart">
         <p className="Ptext"> Durée moyenne des sessions</p>
        <LineChart width={240} height={140} data={data}>
            <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="white" dy={0}  />

            <Tooltip content={<CustomTooltip />}/>  

        <Line type="monotone" dataKey="sessionLength" stroke="white" strokeWidth={2} dot={false} />
        </LineChart>
        
    </div>
  );
}
