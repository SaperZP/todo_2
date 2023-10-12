import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';
import { useReactiveVar } from '@apollo/client';
import { authToken } from '../graphql/client';

const useGetRoute = () => {
  const authorized = useReactiveVar(authToken);

  console.log(authorized, 'from routes/index');

  return authorized ? privateRoutes : publicRoutes;
};

export default useGetRoute;
