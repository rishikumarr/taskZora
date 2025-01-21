import Login from "./pages/Login.tsx";
import Layout from "./Layout.tsx";
import App from "./App.tsx";

import { createBrowserRouter } from "react-router-dom";
import Tasks from "./pages/tasks/Tasks.tsx";
import EditTask from "./pages/tasks/EditTask.tsx";
import Users from "./pages/users/Users.tsx";
import AddUser from "./pages/users/AddUser.tsx";
import EditUser from "./pages/users/EditUser.tsx";
import AddTask from "./pages/tasks/AddTask.tsx";
import DeleteTask from "./pages/tasks/DeleteTask.tsx";
import DeleteUser from "./pages/users/DeleteUser.tsx";
import Task from "./pages/tasks/Task.tsx";

const routes = [
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/tasks/:taskId",
    element: <Task/>,
  },
  {
    path: "/tasks/add",
    element: <AddTask />,
  },
  {
    path: "/tasks/edit/:taskId",
    element: <EditTask />,
  },
  {
    path: "/tasks/delete/:taskId",
    element: <DeleteTask />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/add",
    element: <AddUser />,
  },
  {
    path: "/users/edit/:userId",
    element: <EditUser />,
  },
  {
    path: "/users/delete/:userId",
    element: <DeleteUser />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Login />
      </App>
    ),
    errorElement: <>404 not found</>,
  },
  {
    path: "/login",
    element: (
      <App>
        <Login />
      </App>
    ),
  },
  {
    path: "/",
    element: (
      <App>
        <Layout />
      </App>
    ),
    children: routes,
  },
]);

// import Login from "./pages/Login.tsx";

// import TasksLayout from "./TasksLayout.tsx";
// import Tasks from "./pages/tasks/Tasks.tsx";
// import AddTask from "./pages/tasks/AddTask.tsx";
// import EditTask from "./pages/tasks/EditTask.tsx";
// import Task from "./pages/tasks/Task.tsx";

// import UsersLayout from "./UsersLayout.tsx";
// import Users from "./pages/users/Users.tsx";
// import AddUser from "./pages/users/AddUser.tsx";
// import EditUser from "./pages/users/EditUser.tsx";
// import User from "./pages/users/User.tsx";

// import Layout from "./Layout.tsx";
// import App from "./App.tsx";

// import { createBrowserRouter } from "react-router-dom";
// import DeleteTask from "./pages/tasks/DeleteTask.tsx";

// const routes = [
//   {
//     path: "/tasks",
//     element: <TasksLayout />,
//     children: [
//       {
//         path: "",
//         element: <Tasks />
//       },
//       {
//         path: ":taskId",
//         element: <Task />,
//       },
//       {
//         path: "edit/:taskId",
//         element: <EditTask/>
//       },
//       {
//         path: "add",
//         element: <AddTask/>
//       },
//       {
//         path: "delete/:taskId",
//         element: <DeleteTask/>
//       }
//     ],
//   },
//   {
//     path: "/users",
//     element: <UsersLayout />,
//     children: [
//       {
//         path: "",
//         element: <Users/>
//       }
//       ,
//       {
//         path: ":userId",
//         element: <User />,
//       },
//       {
//         path: "edit/:userId",
//         element: <EditUser/>
//       },
//       {
//         path: "add",
//         element: <AddUser/>
//       }
//     ],
//   }
// ];

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <App>
//         <Login />
//       </App>
//     ),
//     errorElement: <>404 not found</>,
//   },
//   {
//     path: "/login",
//     element: (
//       <App>
//         <Login />
//       </App>
//     ),
//   },
//   {
//     path: "/",
//     element: (
//       <App>
//         <Layout />
//       </App>
//     ),
//     children: routes,
//   },
// ]);
