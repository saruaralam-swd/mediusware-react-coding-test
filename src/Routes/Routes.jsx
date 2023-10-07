import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";
import Problem1 from "../Components/Problem1";
import Problem2 from "../Components/Problem2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/problem1",
        element: <Problem1></Problem1>,
      },
      {
        path: "/problem2",
        element: <Problem2></Problem2>,
      },
    ],
  },
]);

export default router;
