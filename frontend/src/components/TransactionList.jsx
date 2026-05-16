function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Transactions</h2>

      {transactions.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>

          <p>₹{item.amount}</p>

          <p>{item.type}</p>

          <p>{item.category}</p>

          <button onClick={() => deleteTransaction(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;