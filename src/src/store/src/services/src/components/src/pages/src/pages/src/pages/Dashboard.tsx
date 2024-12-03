import { fetchUsers } from '../services/httpService';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">User Dashboard</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id} className="p-2 border-b">
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
