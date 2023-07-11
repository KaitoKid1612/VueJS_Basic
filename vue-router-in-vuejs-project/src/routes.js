// Define routes to components
import Home from "./assets/components/Home";
import User from "./assets/components/user/User";
import UserIndex from "./assets/components/user/UserIndex";
import UserEdit from "./assets/components/user/UserEdit";
import UserDetails from "./assets/components/user/UserDetails";

export const routes = [
  {
    path: "/",
    name: "homepage",
    component: Home
  },
  {
    path: "/user",
    name: "user",
    component: User,
    children: [
      {
        path: "",
        name: "userindex",
        component: UserIndex
      },
      {
        path: ":id",
        name: "userdetails",
        component: UserDetails
      },
      {
        path: ":id/edit",
        name: "useredit",
        component: UserEdit
      }
    ]
  }
];
