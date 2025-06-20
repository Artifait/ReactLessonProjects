import React from "react";
import UserRow from "./UserRow";
import styles from "./UserTable.module.css";

export default function UserTable({ users, userTypes, setUsers }) {
  const updateUser = (updatedUser) => {
    const newList = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u
    );
    setUsers(newList);
    localStorage.setItem("users", JSON.stringify(newList));
  };
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Пользователь</th>
          <th>Вид</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            userTypes={userTypes}
            onSave={updateUser}
          />
        ))}
      </tbody>
    </table>
  );
}
