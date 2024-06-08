// pages/Routes.jsx
import HomePage from "./Home";
import CVPage from "./CV";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    exact: true,
  },
  {
    path: "/cv",
    element: <CVPage />,
    exact: true,
  },
];

export default routes;
