import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const [data, setData] = useState({
    users: [],
    transactions: [],
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchData = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/admin/dashboard",
      {
        headers: {
          authorization: user.token,
        },
      }
    );
 setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
 return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Admin Dashboard</h1>

      <h2 className="text-2xl mb-3">Users</h2>

      {data.users.map((user) => (
        <div key={user._id} className="border p-3 mb-2">
          {user.name} - {user.email}
        </div>
      ))}
     <h2 className="text-2xl mt-10 mb-3">Transactions</h2>

      {data.transactions.map((item) => (
        <div key={item._id} className="border p-3 mb-2">
          {item.title} - ₹{item.amount} - {item.type}
        </div>
      ))}
    </div>
  );
}

export default Admin;