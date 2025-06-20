import { userTypes, initialUsers } from "./data/data";
import { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import Toolbar from "./components/Toolbar";
import styles from "./App.module.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("users");
    setUsers(saved ? JSON.parse(saved) : initialUsers);
  }, []);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Справочник пользователей</h1>
      <Toolbar initialUsers={initialUsers} users={users} setUsers={setUsers} />
      <UserTable users={users} userTypes={userTypes} setUsers={setUsers} />
    </div>
  );
}
