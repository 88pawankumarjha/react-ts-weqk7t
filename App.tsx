import * as React from 'react';
import data from './assets/data';
import DarkMode from './components/DarkMode';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './style.css';

export default function App() {
  return (
    <div>
      {/* https://github.com/recharts/recharts */}
      {/* https://dev.to/alexeagleson/how-to-create-a-dark-mode-component-in-react-3ibg */}
      <div className="visualization">
        <DarkMode />
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
