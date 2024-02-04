import { useEffect, useState } from "react";
import "../../App.css";

import UserCard from "./UserCard";

function FetchApi() {
  const [users, setUsers] = useState([]);
  const USERS_API = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USERS_API);
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {users &&
        users.map((user) => (
          <li key={user.id}>
            <UserCard userprop={user} />
          </li>
        ))}
    </div>
  );
}

export default FetchApi;
