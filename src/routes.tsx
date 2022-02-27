import type { RouteObject } from 'react-router-dom';
import { Home, NotFound, Login } from '@/pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/inicio',
    element: <Home />,
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
