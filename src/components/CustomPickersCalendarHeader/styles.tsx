import { SystemStyleObject } from '@mui/system';
import { Theme } from '@mui/material';

export const CustomPickersCalendarHeaderStyles = {
  wrapper: {
    marginY: '8px',
    display: 'flex',
    justifyContent: 'space-between',
  } as SystemStyleObject,
  text: {
    display: 'flex',
    flexDirection: 'column',
  } as SystemStyleObject,
  textTitle: {
    textAlign: 'center',
    fontWeight: '400',
    color: (theme: Theme) => theme.palette.project_color_white.main,
  } as SystemStyleObject,
  textSubtitle: {
    textAlign: 'center',
    fontSize: '0.625rem',
    color: (theme: Theme) => theme.palette.project_color_gray.light,
  } as SystemStyleObject,
  divider: {
    backgroundColor: (theme: Theme) => theme.palette.project_color_gray.main,
  } as SystemStyleObject,
};
