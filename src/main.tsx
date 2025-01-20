import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.tsx';
import ListTasks from './pages/list/ListTasks.tsx';
import EditTask from './pages/edit/EditTask.tsx';
import ListUsers from './pages/list/ListUsers.tsx';
import EditUser from './pages/edit/EditUser.tsx';
import AddTask from './pages/add/AddTask.tsx';
import AddUser from './pages/add/AddUser.tsx';
import User from './pages/list/User.tsx';
import Task from './pages/list/Task.tsx';
import Layout from './Layout.tsx';

const routes = [
  {
    path: '/list/tasks',
    element: <ListTasks/>,
    children: [
      {
        path: ':taskId',
        element: <Task/>
      }
    ]
  },
  {
    path: '/add/tasks',
    element: <AddTask/>,
  },
  {
    path: '/edit/tasks/:taskId',
    element: <EditTask/>,
  },
  {
    path: '/list/users',
    element: <ListUsers/>,
    children: [
      {
        path: ':userId',
        element: <User/>
      }
    ]
  },
  {
    path: '/add/users',
    element: <AddUser/>,
  },
  {
    path: '/edit/users/:userId',
    element: <EditUser/>,
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement: <>404 not found</>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/',
    element: <Layout/>,
    children: routes
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
