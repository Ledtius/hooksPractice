import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";
const data = [
  { month: "January", sales: 400, expenses: 240 },
  { month: "February", sales: 300, expenses: 139 },
  { month: "March", sales: 200, expenses: 980 },
  { month: "April", sales: 278, expenses: 390 },
  { month: "May", sales: 189, expenses: 480 },
];

const Chart = () => {
  return (
    <>
      {/* <LineChart width={600} height={300} data={data}>
        <Line dataKey="pv" />
      </LineChart> */}

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid />
        <Legend/>
        <Line dataKey="sales" stroke="#FF00FF" strokeDasharray="3 3" />
        <Line dataKey="expenses" stroke="red" />
        <XAxis dataKey="month" />
        <YAxis />
      </LineChart>
    </>
  );
};

export default Chart;
