import React from 'react';
import './App.css';
import ProjectThemeProvider from './theme/ProjectThemeProvider';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { RouterProvider } from 'react-router-dom';
import useGetRoute from './routes';
import Box from '@mui/material/Box';

function App() {
  const route = useGetRoute();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ProjectThemeProvider>
        <Box sx={{}}>
          <RouterProvider router={route} />
        </Box>
      </ProjectThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
