import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function MonthlyChart({ transactions }) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);
    const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["green", "red"],
      },
    ],
  };

  return <Pie data={data} />;
}

export default MonthlyChart;
