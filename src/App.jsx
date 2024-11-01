import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import useFetchUsers from "./hooks/useFetchUsers";

export default function App() {
  const [userName, setUserName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [users, setUsers] = useState([]);

  useFetchUsers(isSearching, setIsSearching, setUsers, userName);

  return (
    <div className="App">
      <div className="search-query">
        <Form
          userName={userName}
          setName={(e) => setUserName(e.target.value)}
          setIsSearching={setIsSearching}
        />
      </div>
      <div className="users-list">
        <List users={users} />
      </div>
    </div>
  );
}
