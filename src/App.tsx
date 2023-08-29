import React from 'react';
import './App.css';
import ProjectThemeProvider from './theme/ProjectThemeProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { RouterProvider } from 'react-router-dom';
import viewRouter from './routes/viewRoutes';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ProjectThemeProvider>
        <RouterProvider router={viewRouter} />
      </ProjectThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
