import { SxProps, Theme } from '@mui/material';

export const layoutStyles = {
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    backgroundColor: (theme: Theme) => theme.palette.project_color_black.main,
  } as SxProps,
  outletHolder: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  } as SxProps,
  layoutFooter: {
    backgroundColor: (theme: Theme) => theme.palette.project_color_black.light,
    position: 'sticky',
  } as SxProps,
  toolbarSection: {
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: 1,
  } as SxProps,
};
