import Home from "./routes/Home/Home";
import Layout from "./routes/Layout/Layout";
import ListPage from "./routes/ListPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/Profile/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/list/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
