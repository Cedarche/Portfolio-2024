import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Landing from "./Landing/Landing";
import Experience from "./Experience/Experience";
import Projects from "./ProjectPages/Projects";
import Contact from "./Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects/*",
    element: <Projects />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
