import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Root from "../../Root/Root";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Details from "../../Details/Details";
import PraivateRoute from "../../../PrivateRoute";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Addcard from "../../Addcard/Addcard";
import Mycards from "../../Mycard/Mycards";
import Update from "../../../Update/Update";
import Praivate2 from "../../../Private2/Private2";
import Praivate3 from "../../../Private3/Private3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/technology.json"),
      },
      {
        path: "/cards/:id",
        element: (
          <PraivateRoute>
            <Details></Details>
          </PraivateRoute>
        ),
        loader: () => fetch("/technology.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/add",
        element: (
          <Praivate2>
            <Addcard></Addcard>
          </Praivate2>
        ),
      },

      {
        path: "/my",
        element: (
          <Praivate3>
            <Mycards></Mycards>
          </Praivate3>
        ),
        loader: () => fetch(" https://assinment10-servers-qm7cixbfy-yeasins-projects.vercel.app/add"),
      },
      {
        path: "/my/:id",
        element: <Update></Update>,
        loader: ({ params }) => {
          console.log(params);
          return fetch(` https://assinment10-servers-qm7cixbfy-yeasins-projects.vercel.app/my/${params.id}`);
        },
      },
      
    ],
  },
]);
export default router