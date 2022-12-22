import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/api/users");
      setUsers(res.data);
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <div className="container">
        <h2>Users</h2>
        {users?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
