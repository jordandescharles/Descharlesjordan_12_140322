import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types';


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
/**
 * return the main big chart
 * @param   {object} props userActivity from App.js
 * @return  {JSX} div className="MainChart"
 */
export default function MainChart(props) {
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

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={props.userActivity._sessions} margin={{ top: 5, right: 20, left: 0, bottom: 5 }} barGap={8} barCategoryGap="40%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} dy={15} />
          <YAxis yAxisId="kil" orientation="right" dx={40} axisLine={false} tickLine={false} />
          <YAxis yAxisId="cal" dataKey="calories" domain={[0, "dataMax + 0"]} hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="kil" dataKey="kilogram" fill="#282D30" maxBarSize={9} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" maxBarSize={9} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
}

MainChart.propTypes = {
  userActivity: PropTypes.shape({
    sessions: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number
    }))
  })
}