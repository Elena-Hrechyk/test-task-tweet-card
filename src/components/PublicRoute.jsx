import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ redirectTo = '/' }) => {
  return <Navigate to={redirectTo} />;
};
