import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../views/errorPage";
import Home from "../views/home";
import Survey from "../views/survey";
import Login from "../views/login";
import Signup from "../views/signup";
import Dashboard from "../views/dashboard/dashboard";
import Test from "../views/test";

const homeRoutes = [
  { path: "/", element: <Home/> },
  { path: "/login", element: <Login/> },
  { path: "/signup", element: <Signup/> },
  { path: "/test", element: <Test/> }, // Conditionally render this depending on environment
  { path: "*", element: <ErrorPage/> }
]

const dashboardRoutes = [
  { path: "/dashboard/", element: <Dashboard/> }
]

const surveyRoutes = [
  { path: "/s/:param", element: <Survey/> },
]

const router = createBrowserRouter(homeRoutes.concat(
  dashboardRoutes, 
  surveyRoutes
))

export default router