function Balance({ transactions = [] }) {
  const { income, expense } = transactions.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += Number(item.amount) || 0;
      } else if (item.type === "expense") {
        acc.expense += Number(item.amount) || 0;
      }

      return acc;
    },
    { income: 0, expense: 0 }
  );

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