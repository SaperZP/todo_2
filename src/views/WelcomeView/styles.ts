import { getSxStyles } from '../../utils/getSxStyles';
import { Theme } from '@mui/material';

export const welcomeViewStyles = getSxStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: '139px 24px 67px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  title: {
    textAlign: 'center',
    color: (theme: Theme) => theme.palette.project_color_white.main,
    fontSize: (theme: Theme) => theme.typography.pxToRem(32),
    fontWeight: 700,
  },
  text: {
    textAlign: 'center',
    color: (theme: Theme) => theme.palette.project_color_gray.light,
  },
  loginButton: {
    backgroundColor: (theme: Theme) => theme.palette.project_color_blue.main,
  },
  signUp: {
    color: (theme: Theme) => theme.palette.project_color_white.main,
    borderColor: (theme: Theme) => theme.palette.project_color_blue.main,
  },
});
