import { UserInterface } from "../assets/constants/file";

export default function UserInfoCard({ ...userObjInfo }: UserInterface) {
  return (
    <div>
      <p>{userObjInfo.login}</p>
      <p>{userObjInfo.name}</p>
    </div>
  );
}
