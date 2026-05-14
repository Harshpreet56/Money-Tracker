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
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {/* Balance Box */}
      <div
        style={{
          backgroundColor: "#4f46e5",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          width: "220px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Balance</h2>
        <h3>₹{balance}</h3>
      </div>

      {/* Income Box */}
      <div
        style={{
          backgroundColor: "#16a34a",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          width: "220px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Income</h2>
        <h3>₹{income}</h3>
      </div>

      {/* Expense Box */}
      <div
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          width: "220px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Expense</h2>
        <h3>₹{expense}</h3>
      </div>
    </div>
  );
}

export default Balance;