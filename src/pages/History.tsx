import UserInfoCard from '../components/UserInfoCard';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';

export default function History() {
  const users = useSelector((state: RootState) => state.userStore.users);

  return (
    <div>
      {users.map((u) => (
        <div key={u.login} style={{ border: '1px solid black' }}>
          <UserInfoCard {...u} />
        </div>
      ))}
    </div>
  );
}
