import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const PieChartDiv = (stateInfo) => {
  const colors = ["goldenrod", "#0000cd", "red", "green"];
  const pieData = [
    {
      name: "cases on admission",
      value: stateInfo.state[0].casesOnAdmission,
    },
    {
      name: "confirmed cases",
      value: stateInfo.state[0].confirmedCases,
    },
    {
      name: "death",
      value: stateInfo.state[0].death,
    },
    {
      name: "discharged",
      value: stateInfo.state[0].discharged,
    },
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="m-auto flex justify-center">
      <PieChart width={500} height={300}>
        <Pie
          data={pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartDiv;
