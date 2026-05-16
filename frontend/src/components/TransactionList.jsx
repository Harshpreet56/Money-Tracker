function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "32px",
          color: "#111827",
        }}
      >
        Transactions
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        {transactions.map((item) => (
          <div
            key={item._id}
            className="transaction-item"
            style={{
              width: "280px",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "0.3s",
            }}
          >
            {/* Card Content */}
            <div>
              <strong
                style={{
                  fontSize: "22px",
                  color: "#111827",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </strong>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#374151",
                  marginBottom: "15px",
                }}
              >
                ₹{item.amount}
              </p>

              {/* Type Badge */}
              <div
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  borderRadius: "30px",
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  backgroundColor:
                    item.type === "income"
                      ? "#16a34a"
                      : item.type === "expense"
                      ? "#dc2626"
                      : "#f59e0b",
                }}
              >
                {item.type}
              </div>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => deleteTransaction(item._id)}
              style={{
                marginTop: "20px",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#111827",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;