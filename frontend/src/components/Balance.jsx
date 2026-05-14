function Balance({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, item) => acc + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="balance-box">
      <h2>Balance: ₹{balance}</h2>
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{expense}</h3>
    </div>
  );
}

export default Balance;