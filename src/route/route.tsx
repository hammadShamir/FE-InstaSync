import { Route, Routes, Navigate } from "react-router-dom";
import RouteConfig from "./routeConfig";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  const isAuthenticated = true;
  console.log(isAuthenticated)

  const renderRoutes = (routes: ReturnType<typeof RouteConfig>) => {
    return routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.isPrivate ? (
            <PrivateRoute route={route.path} isAuthenticated={isAuthenticated}>
              {route.component}
            </PrivateRoute>
          ) : route.isPublic ? (
            <PublicRoute isAuthenticated={isAuthenticated}>
              {route.component}
            </PublicRoute>
          ) : (
            route.component
          )
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <Routes>
      {renderRoutes(RouteConfig())}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
