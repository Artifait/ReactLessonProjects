import { v4 as uuidv4 } from 'uuid';
import './App.css'
import users from './data/users';
import UserCard from './components/UserCard';

export default function App() {
  return (
    <div className="app-container">
      <h1>Пользователи</h1>
      <div className="card-grid">
        {users.map((user) => (
          <UserCard key={uuidv4()} {...user} />
        ))}
      </div>
    </div>
  );
}
