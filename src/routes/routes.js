import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Home from "@/pages/Home.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import Example from "@/pages/Example.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/Home",
    children: [
      {
        path: "Home",
        name: "Home",
        component: Home,
        props: true
      },
      {
        path: "/user/:id?",
        name: "User Profile",
        alias: "/User Profile", //// go '/', the URL remains '/', but it wcill be matched if visiting '/Receiver'
        component: UserProfile,
        props: true
      },
      {
        path: "Example",
        name: "Example",
        component: Example,
        props: true
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }
];

export default routes;
