import { useLocation, Navigate } from 'react-router-dom';
import { routePath } from './routePath';
import { PrivateRouteProps } from '../utils/Interfaces/appTypes';
import { useEffect } from 'react';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated, }: PrivateRouteProps) => {
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem('redirectPath', location.pathname);
    }
  }, [isAuthenticated, location]);

  if (!isAuthenticated) {
    return <Navigate to={routePath.login} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
