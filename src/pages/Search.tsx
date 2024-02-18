import { useEffect, useState } from 'react';
import FormInfo from '../components/FormInfo';
import axios from 'axios';
import UserInfoCard from '../components/UserInfoCard';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { addUser } from '../state/userSlice';
import { template } from '../assets/constants/file';
import { UserInterface } from '../assets/constants/file';

export default function Search() {
  const [username, setUsername] = useState<string>('ilorez');
  const [userInfo, setUserInfo] = useState<UserInterface>(template);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.currentTarget as HTMLFormElement) as Iterable<
        readonly [PropertyKey, string]
      >
    );
    setUsername(data.username);
  };

  // GET DATA ON USER SEARCH
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((result) => result.data)
      .then((data) => {
        // console.log(data);
        setUserInfo(data);
        dispatch(addUser(data));
      })
      .catch((error) => console.log(error));
  }, [dispatch, username]);
  return (
    <div>
      <div>ddddd</div>
      <FormInfo handleSubmit={handleSubmit} />
      {/* <button onClick={() => dispatch(addUser(userInfo))}>Click</button> */}
      <UserInfoCard {...userInfo} />
    </div>
  );
}
