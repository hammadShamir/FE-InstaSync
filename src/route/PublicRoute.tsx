
import { useEffect } from 'react';
import { routePath } from './routePath';
import { useNavigate } from 'react-router-dom';
import { PublicRouteProps } from '../utils/Interfaces/appTypes';

const PublicRoute: React.FC<PublicRouteProps> = ({ children, isAuthenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      const path = localStorage.getItem('redirectPath') || routePath.home;
      navigate(path);

    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default PublicRoute;
