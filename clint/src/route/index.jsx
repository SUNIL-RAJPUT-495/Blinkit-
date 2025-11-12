import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import { Searchpage } from "../pages/Searchpage";
import { Home } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Searchpage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

export default router;
