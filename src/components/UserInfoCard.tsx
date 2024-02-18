import { UserInterface } from '../pages/Search';

export default function UserInfoCard({ ...userObjInfo }: UserInterface) {
  return (
    <div>
      <p>{userObjInfo.login}</p>
      <p>{userObjInfo.name}</p>
    </div>
  );
}
