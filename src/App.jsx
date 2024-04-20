import Home from "./routes/Home/Home";
import { Layout, RequireAuth } from "./routes/Layout/Layout";
import ListPage from "./routes/ListPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/Profile/ProfilePage";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";

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
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
