import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='label'>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function Statistics() {
  const loaderData = useLoaderData();
  const QuizData = loaderData.data;

  return (
    <ResponsiveContainer width='50%' aspect={2}>
      <BarChart
        width={500}
        height={300}
        data={QuizData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey='total' barSize={20} fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  );
}
