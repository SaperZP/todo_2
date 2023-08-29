import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomeView from '../views/HomeView';
import CalendarView from '../views/CalendarView';
import React from 'react';
import ErrorPage from './ErrorPage';

const viewRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomeView />,
        index: true,
      },
      {
        element: <CalendarView />,
        path: '/calendar/',
      },
    ],
  },
]);

export default viewRouter;