
export default function UserCard({ name, phone, country, address }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p><strong>Телефон:</strong> {phone}</p>
      <p><strong>Страна:</strong> {country}</p>
      <p><strong>Адрес:</strong> {address}</p>
    </div>
  );
}
