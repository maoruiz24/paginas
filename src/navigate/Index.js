
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../components/screens/Dashboard";
import Error404 from "../components/screens/Error404";
import Login from "../components/screens/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />
  }
  ,
  {
    path: "*",
    element: <Error404 />
  }
]);

export default router;