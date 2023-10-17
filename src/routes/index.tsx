import privateRoutes from './privateRoutes';
import publicRoutes from './publicRoutes';
import { useReactiveVar } from '@apollo/client';
import { authToken } from '../graphql/client';
import jwt_decode from 'jwt-decode';

const useGetRoute = () => {
  const token = useReactiveVar(authToken);

  const authorized = () => {
    if (token) {
      let decodedToken;

      try {
        decodedToken = jwt_decode<{ exp: number }>(token);
      } catch (e) {
        console.info(e);
        localStorage.removeItem('token');
        authToken('');
        return false;
      }

      const currentTimestamp = Math.floor(Date.now() / 1000);

      return decodedToken.exp > currentTimestamp;
    }

    return false;
  };

  return authorized() ? privateRoutes : publicRoutes;
};

export default useGetRoute;
