import DefaultLayout from "./containers/DefaultLayout";
import Page404 from "./views/Page404";
import Welcome from "./views/welcome";
import Navbar from "../src/navbar/index";
import Rent from "../src/views/movieCateggory/index";
import Logins from "./views/login/index";
import Register from "./views/registration/index";
import Player from "./views/player/index";
import Redeem from "./views/RedeemVoch/index";

const routes = [
  {
    path: "/",
    exact: true,
    name: "Default",
    component: DefaultLayout
  },
  {
    path: "/navbar",
    exact: true,
    name: "navbar",
    component: Navbar
  },

  {
    path: "/ott/.com/",
    exact: true,
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/New-To-Rent/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/player/:id",
    exact: true,
    name: "Rent",
    component: Player
  },
  {
    path: "/redeem",
    exact: true,
    name: "Redeem",
    component: Redeem
  },
  {
    path: "/New-To-Buy/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Pre-Order/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Movie-Box-Seats/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Official-Film-Chart/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Browse/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Logins
  },
  {
    path: "/register",
    exact: true,
    name: "Register",
    component: Register
  },
  {
    path: "/A-To-Z/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Sky-Store-Premiere/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Sale/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Super-Hero-Savings/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Store-Picks/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Under-3/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Under-4/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Under-5/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Sky-Vip-Gifts/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Most-Popular/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/New-To-Store/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Drama/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Comedy/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/Kids/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "/All/:id",
    exact: true,
    name: "Rent",
    component: Rent
  },
  {
    path: "",
    exact: true,
    name: "Page Not Found",
    component: Page404
  }
];

export default routes;
