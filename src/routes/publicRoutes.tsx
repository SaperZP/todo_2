import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import WelcomeView from '../views/WelcomeView';
import SignUpView from '../views/SignUpView';
import SignInView from '../views/SignInView';
import Layout from '../layout/Layout';

const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomeView />,
      },
      {
        path: '/signup',
        element: <SignUpView />,
      },
      {
        path: '/signin',
        element: <SignInView />,
      },
    ],
  },
]);

export default publicRoutes;
