import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import WelcomeView from '../views/WelcomeView';
import SignUpView from '../views/SignUpView';
import SignInView from '../views/SignInView';

const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignUpView />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <SignInView />,
    errorElement: <ErrorPage />,
  },
]);

export default publicRoutes;
