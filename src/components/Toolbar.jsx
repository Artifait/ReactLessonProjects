import * as XLSX from "xlsx";

import styles from "./Toolbar.module.css";
import { userTypes } from "./../data/data";

export default function Toolbar({ initialUsers, users, setUsers }) {
  const resetData = () => {
    setUsers(initialUsers);
    localStorage.removeItem("users");
  };
  const loadData = () => {
    const saved = localStorage.getItem("users");
    if (saved) setUsers(JSON.parse(saved));
  };
  const exportExcel = () => {
    const data = users.map((u) => ({
      Пользователь: u.name,
      "Вид пользователя": userTypes.find((t) => t.id === u.id_type)?.name || "",
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };
  return (
    <div className={styles.toolbar}>
      <button className={styles.button} onClick={resetData}>
        Сбросить
      </button>
      <button className={styles.button} onClick={loadData}>
        Затянуть данные
      </button>
      <button className={styles.button} onClick={exportExcel}>
        Печать в Excel
      </button>
    </div>
  );
}
