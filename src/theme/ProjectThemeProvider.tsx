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
          h1: {
            fontSize: '32px',
            fontWeight: 700,
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
            body {
              background: rgb(131,58,180);
              background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
            }
            `,
          },
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
