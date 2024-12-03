import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const userStore = useUserStore();
  return userStore.token ? children : <Navigate to="/" />;
}
