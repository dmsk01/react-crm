import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

import WorkersListPage from "./pages/WorkersListPage/WorkersListPage";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import WorkerPage from "./pages/WorkerPage/WorkerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <WorkersListPage />,
      },
      {
        path: "workers/:workerId",
        element: <WorkerPage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
