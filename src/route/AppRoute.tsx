import { Routes, Route } from "react-router-dom"
import routeConfig from "./routeConfig"
import { RouteConfig } from '../utils/Interfaces/appTypes';

const AppRoute = () => {
  const renderRoutes = (routes: RouteConfig[]) => {
    return routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.component}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <Routes>
      {renderRoutes(routeConfig())}
    </Routes>
  )
}

export default AppRoute
