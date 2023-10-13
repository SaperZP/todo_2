import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';
import { useReactiveVar } from '@apollo/client';
import { authToken } from '../graphql/client';

const useGetRoute = () => {
  const authorized = useReactiveVar(authToken);

  return authorized ? privateRoutes : publicRoutes;
};

export default useGetRoute;
