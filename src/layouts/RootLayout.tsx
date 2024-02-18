import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          gap: '2em',
          listStyle: 'none',
          color: 'black'
        }}
      >
        <li>
          <NavLink to={'/search'}>Search</NavLink>
        </li>
        <li>
          <NavLink to={'/History'}>History</NavLink>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}
