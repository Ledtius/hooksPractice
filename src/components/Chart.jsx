import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", active: 120, newUsers: 50 },
  { month: "Feb", active: 200, newUsers: 80 },
  { month: "Mar", active: 150, newUsers: 40 },
  { month: "Apr", active: 300, newUsers: 120 },
  { month: "May", active: 250, newUsers: 90 },
];

const Chart = () => {
  return (
    <>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 10 }}
      >
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis
          width="auto"
          label={{ value: "New users", position: "insideLeft", angle: -90 }}
        />
        <Line
          dataKey="active"
          stroke="blue"
          type="monotone"
          strokeWidth={3}
          name="Active users"
        />
        <Line dataKey="newUsers" stroke="green" />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          iconType="circle"
        />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default Chart;
