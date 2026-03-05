import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../AppLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Skills } from "../pages/Skill";
import { Project } from "../pages/Project";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Project /> },
    ],
  },
]);
