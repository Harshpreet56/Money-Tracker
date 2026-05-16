import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Balance from "./components/Balance.jsx";
import TransactionForm from "./components/TransactiomForm.jsx";
import TransactionList from "./components/TransactionList.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

import "./App.css";

const API = "https://money-tracker3.onrender.com/api/transactions";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const fetchTransactions = async () => {
    const res = await axios.get(API);
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const addTransaction = async (data) => {
    await axios.post(API, data);
    fetchTransactions();
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTransactions();
  };

  const filteredTransactions = transactions.filter((item) => {
    if (!selectedDate) return true;

    return item.createdAt.slice(0, 10) === selectedDate;
  });

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Register />} />

      <Route
        path="/Home"
        element={
          <div className="container">
            <h1>Money Tracker</h1>

            <Balance transactions={transactions} />

            <TransactionForm addTransaction={addTransaction} />

            <TransactionList
              transactions={filteredTransactions}
              deleteTransaction={deleteTransaction}
            />

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        }
      />
    </Routes>
  );
}

export default App;