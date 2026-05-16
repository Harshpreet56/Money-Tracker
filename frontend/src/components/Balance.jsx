function Balance({ transactions = [] }) {
  const { income, expense, deposit } = transactions.reduce(
    (acc, item) => {
      if (item.type === "income") {
        acc.income += Number(item.amount);
      }

      if (item.type === "expense") {
        acc.expense += Number(item.amount);
      }

      if (item.type === "deposit") {
        acc.deposit += Number(item.amount);
      }

      return acc;
    },
    {
      income: 0,
      expense: 0,
      deposit: 0,
    }
  );

  const balance = income + deposit - expense;

  return (
    <div className="balance-container">
      <div className="card">
        <h2>Balance</h2>
        <h3>₹{balance}</h3>
      </div>

      <div className="card income">
        <h2>Income</h2>
        <h3>₹{income}</h3>
      </div>

      <div className="card expense">
        <h2>Expense</h2>
        <h3>₹{expense}</h3>
      </div>

      <div className="card deposit">
        <h2>Deposit</h2>
        <h3>₹{deposit}</h3>
      </div>
    </div>
  );
}

export default Balance;