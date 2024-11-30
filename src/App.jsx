import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Error from "./pages/Error";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/Portfolio";
import All from "./pages/portfolio/All";
import Brand from "./pages/portfolio/Brand";
import Design from "./pages/portfolio/Design";
import Photo from "./pages/portfolio/Photo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/portfolio",
          element: <Portfolio></Portfolio>,
          children: [
            {
              path: "/portfolio",
              element: <All></All>,
            },
            {
              path: "/portfolio/brand",
              element: <Brand></Brand>,
            },
            {
              path: "/portfolio/design",
              element: <Design></Design>,
            },
            {
              path: "/portfolio/photograpy",
              element: <Photo></Photo>,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
