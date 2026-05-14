import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "income",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      title: formData.title.trim(),
      amount: Number(formData.amount),
      type: formData.type,
    };

    await addTransaction(transaction);

    setFormData({
      title: "",
      amount: "",
      type: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        padding: "25px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        Add Transaction
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Enter Title"
        value={formData.title}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="number"
        name="amount"
        placeholder="Enter Amount"
        value={formData.amount}
        onChange={handleChange}
        required
        style={inputStyle}
      />

 

      {/* Type Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          onClick={() => setFormData({ ...formData, type: "income" })}
          style={{
            ...typeButton,
            backgroundColor:
              formData.type === "income" ? "#16a34a" : "#d1d5db",
            color: formData.type === "income" ? "#fff" : "#000",
          }}
        >
          Income
        </button>

        <button
          type="button"
          onClick={() => setFormData({ ...formData, type: "deposit" })}
          style={{
            ...typeButton,
            backgroundColor:
              formData.type === "deposit" ? "#f59e0b" : "#d1d5db",
            color: formData.type === "deposit" ? "#fff" : "#000",
          }}
        >
          Deposit
        </button>

        <button
          type="button"
          onClick={() => setFormData({ ...formData, type: "expense" })}
          style={{
            ...typeButton,
            backgroundColor:
              formData.type === "expense" ? "#dc2626" : "#d1d5db",
            color: formData.type === "expense" ? "#fff" : "#000",
          }}
        >
          Expense
        </button>
      </div>

      <button
        type="submit"
        style={{
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#2563eb",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Add Transaction
      </button>
    </form>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
};

const typeButton = {
  padding: "10px 15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "bold",
};

export default TransactionForm;