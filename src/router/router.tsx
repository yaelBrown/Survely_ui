import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/errorPage";
import Home from "../views/home";
import Survey from "../views/survey";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/s", element: <Survey/> },
  { path: "*", element: <ErrorPage/> }
])

export default router