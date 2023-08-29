import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { PALETTE_COLORS } from './colors';

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const ProjectThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          ...PALETTE_COLORS,
        },
        typography: {
          fontFamily: 'Lato, sans-serif',
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};

export default ProjectThemeProvider;
