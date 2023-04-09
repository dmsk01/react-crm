import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkersListPage from "./pages/WorkersListPage/WorkersListPage";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import Header from "./components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <WorkersListPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/tasks",
    element: (
      <Layout>
        <TasksPage />
      </Layout>
    ),
  },
  {
    path: "/schedule",
    element: (
      <Layout>
        <SchedulePage />
      </Layout>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>
    </>
  );
};

export default App;
