import React, { useState } from "react";
import styles from "./UserRow.module.css";

export default function UserRow({ user, userTypes, onSave }) {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [typeId, setTypeId] = useState(user.id_type);

  const save = () => {
    onSave({ ...user, name, id_type: typeId });
    setEditing(false);
  };
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{user.id}</td>
      <td className={styles.cell}>
        {isEditing ? (
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          user.name
        )}
      </td>
      <td className={styles.cell}>
        {isEditing ? (
          <select
            className={styles.select}
            value={typeId}
            onChange={(e) => setTypeId(+e.target.value)}
          >
            {userTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        ) : (
          userTypes.find((t) => t.id === user.id_type)?.name
        )}
      </td>
      <td className={styles.cell}>
        {isEditing ? (
          <>
            <button className={styles.button} onClick={save}>
              Сохранить
            </button>
            <button className={styles.button} onClick={() => setEditing(false)}>
              Отмена
            </button>
          </>
        ) : (
          <button className={styles.button} onClick={() => setEditing(true)}>
            Редактировать
          </button>
        )}
      </td>
    </tr>
  );
}
