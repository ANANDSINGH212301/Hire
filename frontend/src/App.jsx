import React from "react";
import "./app.css";
import { ThemeProvider } from "@/components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./loayouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import MyJob from "./pages/MyJob";
import Jobpage from "./pages/Jobpage";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <Jobpage />,
      },
      {
        path: "/postjob",
        element: <PostJob />,
      },
      {
        path: "/savedjob",
        element: <SavedJob />,
      },
      {
        path: "/myjob",
        element: <MyJob />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
