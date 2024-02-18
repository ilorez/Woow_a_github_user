import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';
import Search from './pages/Search';
import History from './pages/History';

//type
// declare function createRoutesFromElements(
//   children: React.ReactNode
// ): RouteObject[];

// interface RouteObject {
//   caseSensitive?: boolean;
//   children?: RouteObject[];
//   element?: React.ReactNode;
//   index?: boolean;
//   path?: string;
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={RootLayout}>
      <Route path="search" Component={Search} />
      <Route path="history" Component={History} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
