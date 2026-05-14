function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Transactions</h2>

      {transactions.map((item) => (
        <div key={item._id} className="transaction-item">
          <div>
            <strong>{item.title}</strong>
            <p>
              ₹{item.amount} - {item.type}
            </p>
          </div>

          <button onClick={() => deleteTransaction(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;