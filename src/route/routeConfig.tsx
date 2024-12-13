import * as React from 'react';
import Login from "@/Screens/Auth/Login";
import { routePath } from "./routePath";
import { RouteConfig } from "@/utils/Interfaces/appTypes";
import Home from '@/Screens/Home/Home';

const routeConfig = (): RouteConfig[] => {
  return [
    {
      path: routePath.home,
      component: <Home />,
      isPrivate: false,
    },
    {
      path: routePath.login,
      component: <Login />,
      isPrivate: false,
    }
  ];
};

export default routeConfig;
