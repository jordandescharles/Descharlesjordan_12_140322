import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
];

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
      <p className="label">{`${payload[0].value}Kg`}</p>
      <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
}

export default function MainChart() {
  return (
<article className="MainChart">
  <div className="legend">
    
      <span className="title">Activité quotidienne</span>
    
    <div className="legendFlex">
      <span className="legendRight"> 
        <span className="cercle cercleGrey" ></span> 
        <span>Poids (kg)</span>     
         </span>
      <span className="legendRight"> 
        <span className="cercle cercleRed"></span> 
        Calories brûlées (kCal)
      </span>
    </div>
  </div>

  <BarChart 
    width={835} 
    height={220}
    data={data} 
    margin={{top: 5,right: 20,left: 0,bottom: 5 }}
    barGap={8} 
    barCategoryGap="40%"
  >
    <CartesianGrid strokeDasharray="3 3"  vertical={false}/>
    <XAxis dataKey="day" tickLine={false} dy={15}  />
    <YAxis yAxisId="kil" orientation="right" dx={40} axisLine={false} tickLine={false} />
    <YAxis yAxisId="cal" dataKey="calories" domain={[0, "dataMax + 0"]}  hide={true}/>
    <Tooltip content={<CustomTooltip />}/>  
    <Bar yAxisId="kil" dataKey="kilogram" fill="#282D30"  maxBarSize={9} radius={[50, 50, 0, 0]} />
    <Bar yAxisId="cal" dataKey="calories" fill="#E60000" maxBarSize={9} radius={[50, 50, 0, 0]} />
  </BarChart>

</article>
  );
}
