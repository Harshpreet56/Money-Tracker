import { useEffect, useState } from "react";
import axios from "axios";
import Balance from "./components/Balance.jsx";
import TransactionForm from "./components/TransactiomForm.jsx";
import TransactionList from "./components/TransactionList.jsx";
import "./App.css";

const API = "https://money-tracker3.onrender.com/api/transactions";

function App() {
  const [transactions, setTransactions] = useState([]);

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

  return (
    <div className="container">
      <h1>Money Tracker</h1>

      <Balance transactions={transactions} />

      <TransactionForm addTransaction={addTransaction} />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;