import Login from "./pages/Login.tsx";
import ListTasks from "./pages/list/ListTasks.tsx";
import EditTask from "./pages/edit/EditTask.tsx";
import ListUsers from "./pages/list/ListUsers.tsx";
import EditUser from "./pages/edit/EditUser.tsx";
import AddTask from "./pages/add/AddTask.tsx";
import AddUser from "./pages/add/AddUser.tsx";
import User from "./pages/list/User.tsx";
import Task from "./pages/list/Task.tsx";
import Layout from "./Layout.tsx";
import App from "./App.tsx";

import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/list/tasks",
    element: <ListTasks />,
    children: [
      {
        path: ":taskId",
        element: <Task />,
      },
    ],
  },
  {
    path: "/add/tasks",
    element: <AddTask />,
  },
  {
    path: "/edit/tasks/:taskId",
    element: <EditTask />,
  },
  {
    path: "/list/users",
    element: <ListUsers />,
    children: [
      {
        path: ":userId",
        element: <User />,
      },
    ],
  },
  {
    path: "/add/users",
    element: <AddUser />,
  },
  {
    path: "/edit/users/:userId",
    element: <EditUser />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Login/></App>,
    errorElement: <>404 not found</>,
  },
  {
    path: "/login",
    element: <App><Login/></App>,
  },
  {
    path: "/",
    element: <App><Layout/></App>,
    children: routes,
  },
]);
