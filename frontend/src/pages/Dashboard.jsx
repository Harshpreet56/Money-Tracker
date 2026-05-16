
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchTransactions = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/transactions/my",
      {
        headers: {
          authorization: user.token,
        },
      }
    );

    setTransactions(res.data);
  };
 useEffect(() => {
    fetchTransactions();
  }, []);

  const filteredData =
    filter === "all"
      ? transactions
      : transactions.filter((item) => item.type === filter);

  const chartData = [
    {
      name: "Receive",
      value: transactions
        .filter((t) => t.type === "receive")
        .reduce((a, b) => a + b.amount, 0),
        },
       {
      name: "Deposit",
      value: transactions
        .filter((t) => t.type === "deposit")
        .reduce((a, b) => a + b.amount, 0),
    },
    {
      name: "Spend",
      value: transactions
        .filter((t) => t.type === "spend")
        .reduce((a, b) => a + b.amount, 0),
    },
    ];
     return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>

      <div className="flex gap-3 mb-5">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("receive")}>Receive</button>
        <button onClick={() => setFilter("deposit")}>Deposit</button>
        <button onClick={() => setFilter("spend")}>Spend</button>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-10">
        {filteredData.map((item) => (
          <div
            key={item._id}
            className="border p-3 rounded mb-3 flex justify-between"
          >
            <div>
              <h2>{item.title}</h2>
              <p>{item.type}</p>
            </div>

            <h2>₹{item.amount}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;